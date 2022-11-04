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
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className="lastNameInput">
                <label> Last name</label>
                <input type="text" placeholder="Enter your last name" />
              </div>
            </div>

            <label>Email</label>
            <input type="email" placeholder="yourname@gmail.com" />
            <label>Message</label>
            <textarea placeholder="Send me a message and I will reply you as soon as possible.."></textarea>

            <p>
              <input type="checkbox" />
              you agree to providing your data to Najib who may contact you
            </p>

            <button className="submitBtn">Send message</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
