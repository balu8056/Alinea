import React from "react";
import "./HeadCenter.css";
import Phone1 from "../images/app-mobile.gif";
import TopImg from "../images/head_back.svg";
import "bootstrap/dist/css/bootstrap.css";
import $ from "jquery";

const HeadCenter = () => {
  let i = 0;
  const txt1 = "Invest with Intention. ";
  const txt2 = "Learn with Intention. ";
  let temptxt = txt1;
  let isInc = true;

  const type1 = () => {
    if (i <= temptxt.length && isInc) {
      $("#rocketstring").text(temptxt.slice(0, i) + "🚀");
      i++;
      if (i === txt1.length) {
        isInc = false;
      }
    }
    if (!isInc) {
      $("#rocketstring").text(temptxt.slice(0, i) + "🚀");
      i--;
      if (i === 0) {
        isInc = true;
        temptxt = temptxt === txt1 ? txt2 : txt1;
      }
    }
    setTimeout(type1, 150);
  };

  (function () {
    type1();
  })();

  return (
    <div style={{ backgroundColor: "#343a40" }}>
      <div className="container head">
        <div className="row">
          <div className="col-sm-7 topic">
            <h1 className="headCenter">
              Not Your <span className="topical">Typical</span>
              <br></br> Investing App
            </h1>
            <h1 className="rocketString" id="rocketstring">
              <span className="rocketAnim">🚀</span>
            </h1>{" "}
            <p className="description">
              Alinea makes responsible investing fun, easy, and social.
            </p>
            <button className="btn start-your-journey">
              Start Your Journey
            </button>
            <br></br>
            <button className="btn apple-app-store"></button>
          </div>
          <div className="col-sm-5 phoneGif">
            <div className="container ">
              <img
                src={Phone1}
                style={{ width: "100%", height: "auto" }}
                alt="app"
              />
            </div>
          </div>
        </div>
      </div>
      <img src={TopImg} className="topImg" alt="" />
    </div>
  );
};

export default HeadCenter;
