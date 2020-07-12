import React, { Component } from "react";
import "./EmployeeCard.css";

function EmployeeCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name};
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default EmployeeCard;
