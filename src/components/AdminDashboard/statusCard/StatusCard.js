import React from 'react';
import './statusCard.css';
function StatusCard(props) {
    return (
        <div className="statusCard">
            <div className="statusCard__icon">
                <i className={props.icon}></i>
            </div>
            <div className="statusCard__info">
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    );
}

export default StatusCard;
