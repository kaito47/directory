import React from "react";


function EmployeeCard(props) {
    return (
        // <div className="card">
        //     <div className="img-container">
        //         <img alt={props.name} src={props.image} />
        //     </div>
        //     <div className="content">
        //         <ul>
        //             <li>
        //                 <strong>`"Name:" ${props.firstName} ${props.lastName}`</strong>
        //             </li>
        //             <li>
        //                 <strong>`"Phone:" ${props.phone}`</strong>
        //             </li>
        //             <li>
        //                 <strong>Email:</strong> {props.email}
        //             </li>
        //             <li>
        //                 <strong>DOB:</strong> {props.dob}
        //             </li>
        //         </ul>
        //     </div>

        // </div>
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>`"Name:" ${props.firstName} ${props.lastName}`</strong>
                    </li>
                    <li>
                        <strong>`"Phone:" ${props.phone}`</strong>
                    </li>
                    <li>
                        <strong>Email:</strong> {props.email}
                    </li>
                    <li>
                        <strong>DOB:</strong> {props.dob}
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default EmployeeCard;

