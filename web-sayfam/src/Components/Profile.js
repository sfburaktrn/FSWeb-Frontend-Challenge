import "./Profile.css";
import MYFOTO from "../Image/vesikalıkk.png";

function Profile() {
  return (
    <div className="profile">
      <h1 className="profile-yazisi">Profile</h1>
      <div className="profile-content">
        <div className="basic-information">
          <h2 className="basic-information-yazi">Basic Information</h2>
          <div className="profile-intro">
            <p className="profile-soru">
              Doğum Tarihi
              <br />
              <br />
              İkamet şehri <br />
              <br />
              Eğitim
              <br /> Durumu <br />
              <br />
              Tercih Ettiği
              <br />
              Rol
            </p>

            <p className="profile-cevap">
              05.08.1998 <br />
              <br />
              İstanbul
              <br />
              <br />
              <br />
              İnşaat Mühendisliği
              <br />
              <br />
              FrontEnd,UI
            </p>
          </div>
        </div>
        <div
          className="profile-foto"
          style={{ background: `url(${MYFOTO})`, backgroundSize: "cover" }}
        ></div>
        <div className="about-me">
          <h2 className="about-me-yazi">ABOUT ME</h2>
          <p className="about-me-bilgi">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
