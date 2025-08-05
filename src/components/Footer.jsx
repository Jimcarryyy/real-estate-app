import fb_icon from "../../public/images/fb.png";
import lk_icon from "../../public/images/linkedin.png";
import x_icon from "../../public/images/twitter.png";
import yt_icon from "../../public/images/yt.png";
import "./css/Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-banner-1"></div>
      <div className="footer-banner-2">
        <div className="footer-copyrights">
          <p>@2023 Estatein. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-socmed-icons">
          <img src={fb_icon} alt="Icon" />
          <img src={lk_icon} alt="Icon" />
          <img src={x_icon} alt="Icon" />
          <img src={yt_icon} alt="Icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
