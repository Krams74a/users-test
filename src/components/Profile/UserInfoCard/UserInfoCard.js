import React from "react";

const UserInfoCard = ({fullname, birthday, email, phoneNumber, address}) => {
    return (
        <div className="card mb-3" style={{backgroundColor: "#f3f3f3"}}>
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Полное имя</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {fullname || "Отсутствует"}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Дата рождения</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {birthday || "Отсутствует"}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {email || "Отсутствует"}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Телефон</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {phoneNumber || "Отсутствует"}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <h6 className="mb-0">Адрес</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                        {address || "Отсутствует"}
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12" style={{marginTop: "10px"}}>
                        <button className="btn btn-primary">Редактировать</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfoCard
