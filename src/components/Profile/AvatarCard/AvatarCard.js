import React from "react";

const AvatarCard = ({username, status, address}) => {
    return (
        <div className="card" style={{backgroundColor: "#f3f3f3"}}>
            <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                         className="rounded-circle" width="150"/>
                    <div className="mt-3">
                        <h4>{username}</h4>
                        <p className="text-secondary mb-1">{status || "Отсутствует"}</p>
                        <p className="text-muted font-size-sm">{address ||"Отсутствует"}</p>
                        <button className="btn btn-primary" style={{marginRight: "10px"}}>Подписаться</button>
                        <button className="btn btn-outline-primary">Сообщение</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AvatarCard
