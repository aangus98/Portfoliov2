import React, { useMemo, useState } from "react";
import emailjs from "emailjs-com";
import "./css/contactMe.css";

type Notice = { message: string; type: "success" | "error" } | null;

const ContactBox: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [notification, setNotification] = useState<Notice>(null);
  const [isSending, setIsSending] = useState(false);

  const canSend = useMemo(() => {
    const { name, email, message } = formData;
    return name.trim().length > 1 && email.trim().length > 3 && message.trim().length > 5 && !isSending;
  }, [formData, isSending]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const showNotice = (msg: string, type: "success" | "error") => {
    setNotification({ message: msg, type });
    window.setTimeout(() => setNotification(null), 3000);
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSend) return;

    setIsSending(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID as string;

    try {
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          to_email: "mrangus298@gmail.com",
        },
        userID
      );

      setFormData({ name: "", email: "", message: "" });
      showNotice("Email sent successfully!", "success");
    } catch (err) {
      console.error("Error sending email:", err);
      showNotice("Error sending email. Please try again.", "error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section" aria-label="Contact">
      <div className="contact-shell">
        <header className="contact-header">
        </header>

        {notification && (
          <div className={`contact-notice ${notification.type}`} role="status" aria-live="polite">
            {notification.message}
          </div>
        )}

        <div className="contact-grid">
          {/* LEFT: FORM */} 
          <aside className="contact-card contact-info" aria-label="Contact details">
            <div className="info-row">
              <span className="info-label">Email</span>
              <a className="info-value" href="mailto:mrangus298@gmail.com">
                mrangus298@gmail.com
              </a>
            </div>
            <div className="info-row">
              <span className="info-label">Location</span>
              <span className="info-value">Austin, TX</span>
            </div>
            <div className="divider" />
            <p className="info-footnote">
              Prefer a quick intro? Include your goal + timeline and I’ll respond faster.
            </p>
          </aside>
          <div className="contact-card">
            <form onSubmit={sendEmail} className="contact-form">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What can I help with?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="send-btn" type="submit" disabled={!canSend}>
                {isSending ? "Sending…" : "Send"}
              </button>
            </form>
          </div>

          {/* RIGHT: CONTACT INFO */}
         
        </div>
      </div>
    </section>
  );
};

export default ContactBox;
