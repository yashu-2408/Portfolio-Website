import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'; // Assuming emailjs-com is installed
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState<string | null>(null); // 'success', 'error', or null

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);
    setSendStatus(null);

    // Replace with your actual EmailJS Service ID, Template ID, and User ID (Public Key)
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const USER_ID = 'YOUR_USER_ID_OR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
          console.log('EmailJS Success:', result.text);
          setSendStatus('success');
          setIsSending(false);
          form.current?.reset(); // Reset form after successful submission
      }, (error) => {
          console.error('EmailJS Error:', error.text);
          setSendStatus('error');
          setIsSending(false);
      });
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Get in Touch</h3>
        <div className="contact-flex">
          {/* Contact Info Box - Kept for email/phone */}
          <div className="contact-box contact-info-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:viputakarsh3224@gmail.com" data-cursor="disable">
                viputakarsh3224@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+919999999999" data-cursor="disable">
                +91 99999 99999
              </a>
            </p>
            <div className="contact-separator"></div> {/* Separator */}
            <h4>Social</h4>
            <div className="contact-social-links-group">
              <a
                href="https://github.com/yashu-2408/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Github <MdArrowOutward />
              </a>
              <a
                href="https://linkedin.com/in/vipulutkarsh"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Linkedin <MdArrowOutward />
              </a>
              <a
                href="https://x.com" // Replace with actual X/Twitter profile URL
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Twitter <MdArrowOutward />
              </a>
              <a
                href="https://www.instagram.com" // Replace with actual Instagram profile URL
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Instagram <MdArrowOutward />
              </a>
            </div>
          </div>

          {/* Contact Form Box */}
          <div className="contact-box contact-form-box">
            <h4>Send me a message</h4>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input type="text" name="user_name" id="user_name" required />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input type="email" name="user_email" id="user_email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows={4} required></textarea>
              </div>
              <button type="submit" className="submit-button" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {sendStatus === 'success' && <p className="status-message success">Message sent successfully!</p>}
              {sendStatus === 'error' && <p className="status-message error">Failed to send message. Please try again.</p>}
            </form>
          </div>
        </div>
        <div className="contact-footer">
          <h2>
            Designed and Developed <br /> by <span>Vipul Utkarsh</span>
          </h2>
          <h5>
            <MdCopyright /> 2024
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
