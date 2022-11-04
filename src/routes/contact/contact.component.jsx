import "./contact.style.css";
import Footer from "../../components/footer/footer.component";
const Contact = () => {
  return (
    <>
      <div className="contactPageDiv">
        <div className="contactForm">
          <h1>Contact</h1>
          <p>Hi there, contact me to ask me about anything you have in mind</p>
          <form>
            <div className="nameInputFields">
              <div className="firstNameInput">
                <label> First name</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="lastNameInput">
                <label> Last name</label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <label>Email</label>
            <input type="email" id="email" placeholder="yourname@gmail.com" />
            <label>Message</label>
            <textarea
              id="message"
              placeholder="Send me a message and I will reply you as soon as possible..."
            ></textarea>

            <p>
              <input type="checkbox" />
              you agree to providing your data to Najib who may contact you
            </p>

            <button className="submitBtn" id="btn__submit">
              Send message
            </button>
          </form>
        </div>
      </div>
      <div className="main_div">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Contact;
