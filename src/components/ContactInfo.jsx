import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import '../css/contactinfo.css'; 

const ContactInfo = () => {
  return (
    <div className="contact-info" id="contact-us">
      <h1>Get in Touch</h1>

      <div className="contact-info-item">
        <Mail className="icon" />
        <div>
          <p>Mail:</p>
          <a href="mailto:services@700sewagecleaning.com">
            services@700sewagecleaning.com
          </a>
        </div>
      </div>

      <div className="contact-info-item">
        <MapPin className="icon" />
        <div>
          <p>Find us at the office</p>
          <address>Al Mahatta, Sharjah, United Arab Emirates</address>
        </div>
      </div>

      <div className="contact-info-item">
        <Phone className="icon" />
        <div>
          <p>Give us a ring</p>
          <p className="highlight">SRINU GEDDADA</p>
          <p>
            Phone: <a href="tel:+971555989664">+971555989664</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
