import React from "react";
import styles from "./PageStyles.module.css";

function ContactUs() {
  return (
    <div className={`${styles.pageContainer} container`}>
      <h1 className={styles.pageTitle}>Contact Us</h1>
      <section className={styles.pageContent}>
        <p>
          We'd love to hear from you! Whether you have a question about our
          movie selection, feedback on our service, or just want to say hello,
          please don't hesitate to reach out.
        </p>
        <p>You can contact us via:</p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:support@finalmovies.com">support@finalmovies.com</a>
          </li>
          <li>
            <strong>Phone:</strong> +1 (123) 456-7890 (Available Monday -
            Friday, 9 AM - 5 PM EST)
          </li>
          <li>
            <strong>Address:</strong>
            <address>
              Final Movies Headquarters
              <br />
              123 Cinema Drive
              <br />
              Film City, FC 90210
              <br />
              USA
            </address>
          </li>
        </ul>
        <h2>Send Us a Message</h2>
        <p>
          Alternatively, you can fill out the form below, and we'll get back to
          you as soon as possible.
        </p>

        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactUs;
