import React from "react";
import "../belowhead/BelowHead.css";
import 'bootstrap/dist/css/bootstrap.css';
import Box from "./BoxComponent";

const BelowHead = () => {

    const boxes = [
        {profileImg:"👩‍👩‍👧‍👧", profileName: "Community", profileDesc: "We all need someone to lean on and investing is no different.As part of our community, you get the support to embark and continue on your journey."},
        {profileImg:"💸", profileName: "Responsible Investing", profileDesc: "Make your money moves matter!Express your values and interests through your investments."},
        {profileImg:"🌱", profileName: "Learning", profileDesc: "We eliminate all the unnecessary financial jargon.Learn as you go with our interactive mini capsules and before you know it, you’ll be a confident investor."},
    ];

    return (

        <div className="belowHeadText">

            <p className="topText">We get it. 🤷🏽‍♀️<br></br>Investing is overwhelming,<br></br>but it doesn’t have to be.</p>

            <div className="container boxes">
                <div className="row">
                    {boxes.map( (v, i) => <div className="col-sm mb-3" key={i}> <Box values={v} /> </div> )}
                </div>
            </div>
        </div>
    );

};

export default BelowHead;