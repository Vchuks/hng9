import React from "react";
import "./contact.css";
import Footer from "./../Footer";

const index = () => {
  return (
    <div className="contact-page">
      <div className="head-contact">
        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
        <form>
          <div className="form-name">
            <div className="fn">
              <label>First name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
              />
            </div>
            <div className="fn">
              <label>Last name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
              />
            </div>
          </div>
          <div>
            <label>Email</label>
            <br />
            <input type="text" placeholder="yourname@email.com" id="email" />
          </div>
          <div>
            <label>Message</label>
            <br />
            <textarea
              id="message"
              cols=""
              rows="7"
              placeholder="Send me a message and I'll reply as soon as possible..."
            />
          </div>
          <div className="check">
            <input type="checkbox" />
            <label>
              You agree to providing your data to name who may contact you.
            </label>
          </div>
          <div className="btn-contact">
            <button type="submit" id="btn_submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
      <hr />
      <Footer />
    </div>
  );
};

export default index;
