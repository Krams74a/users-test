import React, {useEffect} from "react";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getGroupsList, setPagesInfo} from "../../reducers/groups-reducer";
import Preloader from "../Preloader/Preloader";
import Group from "./Group/Group";
import PaginatorContainer from "../Users/Paginator/Paginator";
import Paginator from "../Users/Paginator/Paginator";
import Warning from "../Utils/Warning/Warning";

export function UsersPage(props) {
    useEffect(() => {
        props.getGroupsList(1, 10)
    }, [])

    if (!props.groupsList && !props.pagesInfo.totalPages) return <Preloader />
    return (
        <div>
            <h1>Все группы</h1>
            <Warning warningText="Группы ещё не до конца сделаны, создавать и подписываться пока что нельзя."/>
            {props.pagesInfo.totalPages === 1 || <Paginator pagesInfo={props.pagesInfo} setPagesInfo={props.setPagesInfo} />}
            {[...props.groupsList].reverse().map((group, key) => {
                return <Group key={key} {...group} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        groupsList: state.groups.groupsList,
        isAuth: state.auth.isAuth,
        pagesInfo: state.groups.pagesInfo
    }
}

const UsersContainer = compose(
    connect(mapStateToProps, {getGroupsList, setPagesInfo}),
    withAuthRedirect
)(UsersPage)

export default UsersContainer;
