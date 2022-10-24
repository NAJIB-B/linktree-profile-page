import profile__img from "./assets/profile__img.png";
import zuri_img from "./assets/zuri_internship.png";
import i4g_img from "./assets/I4G.png";
import hng from "./assets/hng.png";
import slack_img from "./assets/slack.png";
import github_img from "./assets/github.png";
import back_btn_lg from "./assets/back_btn_lg.png";
import back_btn_sm from "./assets/back_btn_sm.png";
import "./App.css";

function App() {
  const links = [
    { name: "Zuri Team", link: "https://training.zuri.team/", id: "btn__zuri" },
    {
      name: "Zuri Books",
      link: "http://books.zuri.team",
      id: "books",
    },
    {
      name: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=najibbala",
      id: "book__python",
    },
    {
      name: "Background check for coders",
      link: "https://background.zuri.team",
      id: "pitch",
    },
    {
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <div className="main_div">
      <div className="profile_pic_div">
        <img
          src={profile__img}
          alt="how I look"
          id="profile__img"
          className="profile_pic"
        ></img>
        <p className="profile_name">Muhmmad Najib Bala</p>
      </div>

      <p className="username " id="twitter">
        najib2557
      </p>

      <p className="username hidden" id="slack">
        najibbala
      </p>

      {links.map((item, index) => {
        return (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="link"
            id={item.id}
            key={index}
          >
            {item.name}
          </a>
        );
      })}
      <div>
        <img src={slack_img} alt="slack logo" className="logo_after_links"></img>
        <img src={github_img} alt="github logo" className="logo_after_links"></img>
      </div>
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
}

export default App;
