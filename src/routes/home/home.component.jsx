import "./home.style.css";
import Footer from "../../components/footer/footer.component";

import profile__img from "../../assets/profile__img.jpg";

import slack_img from "../../assets/slack.png";
import github_img from "../../assets/github.png";
import back_btn_lg from "../../assets/back_btn_lg.png";
import back_btn_sm from "../../assets/back_btn_sm.png";

import { Link } from "react-router-dom";

const Home = () => {
  const links = [
    { name: "Zuri Team", link: "https://training.zuri.team/", id: "btn__zuri" },
    {
      name: "Books on design and coding",
      link: "http://books.zuri.team",
      id: "books",
    },
    {
      name: "Python Books for sale",
      link: "https://books.zuri.team/python-for-beginners?ref_id=najib bala",
      id: "book__python",
    },
    {
      name: "Premium background check for coders",
      link: "https://background.zuri.team",
      id: "pitch",
    },
    {
      name: "Free design book by Zuri",
      link: "https://books.zuri.team/design-rules",
      id: "book__design",
    },
  ];
  return (
    <div className="main_div">
      <img
        src={back_btn_lg}
        alt="back button for large screens"
        className="back_btn_lg"
      ></img>
      <img
        src={back_btn_sm}
        alt="back button for small screens"
        className="back_btn_sm"
      ></img>
      <div className="profile_pic_div">
        <img
          src={profile__img}
          alt="how I look"
          id="profile__img"
          className="profile_pic"
        ></img>
        <p className="profile_name">Muhmmad Najib Bala</p>
      </div>

      <a
        href="https://twitter.com/najib2557"
        target="_blank"
        rel="noreferrer"
        className="username link"
        id="twitter"
      >
        najib2557
      </a>

      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="username hidden"
        id="slack"
      >
        najib bala
      </a>

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
      <Link to="/contact" className="link" id="contact">
        Contact
      </Link>

      <div>
        <img
          src={slack_img}
          alt="slack logo"
          className="logo_after_links"
        ></img>
        <img
          src={github_img}
          alt="github logo"
          className="logo_after_links"
        ></img>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Home;
