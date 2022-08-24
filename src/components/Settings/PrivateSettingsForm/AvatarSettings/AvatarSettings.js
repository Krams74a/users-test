import React, {useEffect, useState} from 'react'
import Avatar from 'react-avatar-edit'
import {Button, Col, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {compose} from "redux";
import {connect} from "react-redux";
import {deleteAvatar, getProfile, updateAvatar} from "../../../../reducers/profile-reducer";
import {withAuthRedirect} from "../../../../hoc/withAuthRedirect";
import Preloader from "../../../Preloader/Preloader";
import {config} from "../../../../config/config";

const AvatarSettings = (props) => {
    const [src, setSrc] = useState()
    const [preview, setPreview] = useState(null)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    console.log(props)
    console.log(src)

    const onMainPhotoSelected = (event) => {
        console.log(event.target.files[0])
        if (event.target.files.length) {
            props.updateAvatar(event.target.files[0], props.profileInfo._id)
                .then(response => {
                    if(response.status === 200) {
                        setSuccess(response.message)
                        props.getProfile(props.loggedUserInfo.username)
                    } else {
                        setError(response.message)
                    }
                })
        }
    }

    const onMainPhotoDeleted = () => {
        props.deleteAvatar(props.profileInfo._id)
            .then(response => {
                if(response.status === 200) {
                    setSuccess(response.message)
                    props.getProfile(props.loggedUserInfo.username)
                } else {
                    setError(response.message)
                }
            })
    }

    useEffect(() => {
        props.getProfile(props.loggedUserInfo.username)
        setSrc(config.avatarUrl + props.profileInfo.avatarUrl)
    }, [])

    const onClose = () => {
        setPreview(null)
    }

    const onCrop = (preview) => {
        setPreview(preview)
    }

    const dataURLtoFile = (dataurl, filename) => {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type: mime});
    }

    const saveAvatar = () => {
        let avatar = dataURLtoFile(preview, "avatar.png")
        props.updateAvatar(avatar, props.profileInfo._id)
            .then(response => {
                if(response.status === 200) {
                    setSuccess(response.message)
                    props.getProfile(props.loggedUserInfo.username)
                } else {
                    setError(response.message)
                }
            })
    }

    if (!src) {return <Preloader />}
    return (
        <div>
            <h1>Настройки аватара</h1>
            <div style={{marginBottom: "5px"}}>
                {error ? <div className="alert alert-danger col-md-4" style={{padding: "5px", marginBottom: "0"}}>
                    {error}
                </div> : null}
                {success ? <div className="alert alert-success col-md-4" style={{padding: "5px", marginBottom: "0"}}>
                    {success}.
                    <div>
                        <span>Можете вернуться к своей </span>
                        <NavLink className="alert-link" to={"/profile/"+props.loggedUserInfo.username}>
                            странице.
                        </NavLink>
                    </div>
                </div> : null}
            </div>
            {props.avatarUrl
                ? <div>
                    <Row style={{marginBottom: "15px"}}>
                        <Col>
                            <div>
                                <Avatar width={390}
                                        height={295}
                                        onCrop={onCrop}
                                        onClose={onClose}
                                        src={src}/>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <h1>Предпросмотр</h1>
                                <img src={preview} alt="Preview" style={{backgroundColor: "#f3f3f3"}}/>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <div className="col-md-4">
                            <Button onClick={saveAvatar} style={{marginRight: "10px"}}>Сохранить</Button>
                            <Button variant="danger" name="deletePicture" onClick={onMainPhotoDeleted}>Удалить
                                аватар</Button>
                        </div>
                    </Row>
                </div>
                : <div className="col-md-4">
                    <p>У вас ещё нет аватара, хотите добавить его?</p>
                    <label htmlFor="picture">Добавить аватар</label>
                    <input
                        name="picture"
                        className="form-control"
                        type="file"
                        onChange={onMainPhotoSelected}
                    />
                </div>
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        loggedUserInfo: state.auth.loggedUserInfo,
        profileInfo: state.profile.profileInfo,
        avatarUrl: state.profile.profileInfo.avatarUrl
    }
}

const AvatarSettingsContainer = compose(
    connect(mapStateToProps, {getProfile, updateAvatar, deleteAvatar}),
    withAuthRedirect
)(AvatarSettings)

export default AvatarSettingsContainer;
