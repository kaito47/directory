import React from "react";

// Creates list of employees from API call
function ResultsList(props) {
    console.log(props)
    return (
        <li className="list-group-item">
            {/* employee could be anything  */}
            <img alt={props.firstName} className="img-fluid" src={props.img} />
            <span>{`${props.firstName} + ${props.lastName}`}</span>
            <span>{props.email}</span>
            <span>{props.dob}</span>
        </li>
    );
}

export default ResultsList;