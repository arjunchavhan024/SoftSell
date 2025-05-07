import React from "react";
import "./css/Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Left Side - Contact Info */}
        <div className="col-6 left">
          <div className="contactTitle">
            <h2>Get in Touch with Us</h2>
            <p>
              We are always open to your thoughts, ideas, and feedback. If you
              have any questions, require more information about our work, or
              are interested in volunteering, please don’t hesitate to contact
              us. We’re here to help and would love to hear from you.
            </p>
          </div>

          <div className="contactInfo">
            <div className="iconGroup">
              <div className="icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="details">
                <span>Phone</span>
                <span>+91 7218XXXXX</span>
              </div>
            </div>

            <div className="iconGroup">
              <div className="icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="details">
                <span>Email</span>
                <span>arjunchavhan024@gmail.com</span>
              </div>
            </div>

            <div className="iconGroup">
              <div className="icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="details">
                <span>Location</span>
                <p>
                  Arjun's SoftSell <br /> , Pvt. Ltd.
                  <br />
                  Ramnagar, Ajabpur, <br />
                  Dehradun, Dehradun, <br />
                  Uttarakhand, India, 248121.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="col-6 right">
          <form className="messageForm">
            <div className="inputGroup halfWidth">
              <input type="text" name="name" id="name" required />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="inputGroup halfWidth">
              <input type="email" name="email" id="email" required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="inputGroup fullWidth">
              <input type="text" name="subject" id="subject" required />
              <label htmlFor="subject">Subject</label>
            </div>

            <div className="inputGroup fullWidth">
              <textarea name="message" id="message" required></textarea>
              <label htmlFor="message">Say Something</label>
            </div>

            <div className="inputGroup fullWidth">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <div className="mapBg"></div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.5877157329!2d77.93473275408255!3d30.325550806397665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sDehradun%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1733997633499!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dehradun Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
