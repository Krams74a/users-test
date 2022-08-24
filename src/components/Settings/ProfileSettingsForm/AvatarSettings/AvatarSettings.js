import React from 'react'
import Avatar from 'react-avatar-edit'
import {Button, Col, Row} from "react-bootstrap";

class AvatarSettings extends React.Component {
    constructor(props) {
        super(props)
        const src = `https://dry-meadow-99203.herokuapp.com/${this.props.avatarUrl}`
        this.state = {
            preview: null,
            src
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.saveAvatar = this.saveAvatar.bind(this)
        this.dataURLtoFile = this.dataURLtoFile.bind(this)
    }

    onClose() {
        this.setState({preview: null})
    }

    onCrop(preview) {
        this.setState({preview})
    }

    dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    }

    saveAvatar() {
        let avatar = this.dataURLtoFile(this.state.preview, "avatar.png")
        this.props.updateAvatar(avatar, this.props.id)
    }

    render () {
        return (
            <div>
                <Row style={{marginBottom: "15px"}}>
                    <Col>
                        <div>
                            <h1>Редактировать аватар</h1>
                            <Avatar
                                width={390}
                                height={295}
                                onCrop={this.onCrop}
                                onClose={this.onClose}
                                src={this.state.src}
                            />
                        </div>

                    </Col>
                    <Col>
                        <div>
                            <h1>Предпросмотр</h1>
                            <img src={this.state.preview} alt="Preview" style={{backgroundColor: "#f3f3f3"}}/>
                        </div>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <div className="col-md-4">
                        <Button onClick={this.saveAvatar} style={{marginRight: "10px"}}>Сохранить</Button>
                        <Button variant="danger" name="deletePicture" onClick={this.props.onMainPhotoDeleted}>Удалить аватар</Button>
                    </div>
                </Row>
            </div>
        )
    }
}

export default AvatarSettings;
