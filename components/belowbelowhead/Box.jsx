import React from "react";
import "./Box.css";

const Box = (props) => {

    const {emoji, title, desc} = props.values;

    return (

        <div className="d-flex align-items-start mb-5 box">
            <div className="pr-4">
                <div className="icon icon-shape icon-color-1 rounded-circle">
                    <span>{emoji}</span>
                </div>
            </div>
            <div className="icon-text">
                <h5>{title}</h5>
                <p className="mb-0 desc">{desc}</p>
            </div>
        </div>
    )

};

export default Box;