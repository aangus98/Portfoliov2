import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "./css/contactMe.css"; // Ensure this CSS file contains the styles below

const ContactBox: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          user_email: formData.email, // Ensure this key matches your EmailJS template variable for sender's email
          message: formData.message,
          to_email: 'mrangus298@gmail.com', // Hard-coded recipient
        },
        userID
      )
      .then(
        (result) => {
          console.log('Email sent:', result.text);
          setNotification({ message: "Email sent successfully!", type: "success" });
          // Optionally clear the form
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        },
        (error) => {
          console.error('Error sending email:', error);
          setNotification({ message: "Error sending email. Please check your input and try again.", type: "error" });
          setTimeout(() => {
            setNotification(null);
          }, 3000);
        }
      );
  };

  return (
    <div className="contact-box">
      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}
      <h2 className='contactme'>Contact Me</h2>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactBox;
