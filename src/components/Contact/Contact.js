import React from "react";
import "./Contact.css";
import contact from '../../Assets/Image/contact.jpg';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
          <section id="contact">
          <div className="section-title">
              <br /><br />
              <h2>Contact With Us</h2>
              <hr />
          </div>
          <div className="contact">
              <div className="contact-left">
                  <img src={contact} alt="" />
              </div>
              <div className="contact-right">
                  <form onSubmit={handleSubmit}>
                      <input type="text" placeholder="Your Name" className="text-field" />
                      <input type="email" placeholder="Your Email" className="text-field" />
                      <textarea placeholder="Your Message" className="text-field" id="" cols="30" rows="10"></textarea>
                      <button className="contact-btn">Submit</button>
                  </form>
              </div>
          </div>
      </section>
  );
};

export default Contact;
