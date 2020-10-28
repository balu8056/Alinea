import './App.css';
import MsgImg from "../images/msg.svg";
import NavBar from "../nav_bar/NavBar";
import HeadCenter from "../head/HeadCenter";
import BelowHead from "../belowhead/BelowHead.jsx";
import BelowBelowHead from "../belowbelowhead/BelowBelowHead.jsx";
import BBBHead from "../bbbhead/BBBHead.jsx";
import BBBBHead from "../bbbbHead/BBBBHead.jsx";
import BelowCarousel from "../belowcarousel/BelowCarousel.jsx";
import Footer from "../foottext/Footer.jsx";

function App() {
  return (
    <div className="App">
      <NavBar className={{backgroundColor: "red"}} />
      <div style={{height: "4px", backgroundColor:"white", width: "100%"}}></div>
      <HeadCenter />
      <BelowHead />
      <BelowBelowHead /> 
      <BBBHead /> 
      <BBBBHead />
      <BelowCarousel />
      <Footer />

      <img src={MsgImg} className="MsgBF" alt="Msg" />
    </div>
  );
}

export default App;
