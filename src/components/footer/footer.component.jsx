import "./footer.style.css";

import zuri_img from "../../assets/zuri_internship.png";
import i4g_img from "../../assets/I4G.png";
import hng from "../../assets/hng.png";

const Footer = () => {
  return (
    <div className="main_div">
      <div className="footer">
        <div>
          <img src={zuri_img} alt="zuri logo"></img>
        </div>
        <div>
          <img src={hng} alt="hng frontend task"></img>
        </div>
        <div>
          <img src={i4g_img} alt="ingressive for good"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
