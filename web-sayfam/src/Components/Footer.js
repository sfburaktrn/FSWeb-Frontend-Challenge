import "./Footer.css";
import { useHistory } from "react-router-dom";
import Twitter from "../Image/twitter2.png";
import Codepen from "../Image/codepen.webp";
import Atfoto from "../Image/atfoto.webp";
import Instagram from "../Image/instalogo.png";

function Footer() {
  const history = useHistory();
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-head-text">Send Message 👇</p>
        <p className="footer-head-text2">
          Bana ulaşmak için mail atabilirsiniz👇
        </p>
        <p className="footer-mail">
          <a
            href="https://www.gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            sbtorun.sbt@gmail.com
          </a>
        </p>

        <button
          className="formbutonu"
          onClick={() => history.push("/iletisimform")}
        >
          {" "}
          İletişim Formu
        </button>

        <div className="social">
          <img className="twitter-photo" src={Twitter} />
          <img className="codepen-photo" src={Codepen} />
          <img className="atfoto-photo" src={Atfoto} />
          <img className="insta-photo" src={Instagram} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
