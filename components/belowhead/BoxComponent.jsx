import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./BoxComponent.css";

const BoxComponent = (props) => {

    const {profileImg, profileName, profileDesc} = props.values;

    return (
        <div className="boxComponent">
            <h1 className="profileImg">{profileImg}</h1>
            <h4 className="profileName">{profileName}</h4>
            <p className="profileDesc">{profileDesc}</p>
        </div>
    );
};

export default BoxComponent;