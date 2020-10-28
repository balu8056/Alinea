import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./BBBHead.css";

const BBBHead = () => {

    return(

        <div className="bbbHead">
            <div className="container">
                <h1 className="communityHead">BECOME A PART OF OUR<br></br> KICKASS COMMUNITY</h1>
                <p className="communityDesc">We can’t do this alone, so we need each other, especially you.<br></br>
                Join our community and get started on your investing journey!</p>  
                <button className="communityJoinBtn">Join Now</button>  
            </div>
        </div>

    );

};

export default BBBHead;