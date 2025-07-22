import React from "react";
import styles from "./PageStyles.module.css";

function PrivacyPolicy() {
  return (
    <div className={`${styles.pageContainer} container`}>
      <h1 className={styles.pageTitle}>Privacy Policy</h1>
      <section className={styles.pageContent}>
        <p>
          Your privacy is important to us at Final Movies. This Privacy Policy
          describes how we collect, use, and disclose information that we obtain
          about visitors to our website (the "Site").
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect personal information that you voluntarily provide to us
          when you express an interest in obtaining information about us or our
          products and services, when you participate in activities on the Site,
          or otherwise when you contact us.
        </p>
        <p>
          The personal information that we collect depends on the context of
          your interactions with us and the Site, the choices you make and the
          products and features you use. The personal information we collect may
          include the following:
        </p>
        <ul>
          <li>Names</li>
          <li>Email addresses</li>
          <li>Contact preferences</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>
          We use personal information collected via our Site for a variety of
          business purposes described below. We process your personal
          information for these purposes in reliance on our legitimate business
          interests, in order to enter into or perform a contract with you, with
          your consent, and/or for compliance with our legal obligations.
        </p>
        <ul>
          <li>To facilitate account creation and logon process.</li>
          <li>To send you marketing and promotional communications.</li>
          <li>To respond to your inquiries and offer support.</li>
          <li>To fulfill and manage your orders.</li>
        </ul>
        <h2>Disclosure of Your Information</h2>
        <p>
          We may share and disclose your information with the following
          categories of third parties:
        </p>
        <ul>
          <li>Vendors, Consultants, and Other Third-Party Service Providers</li>
          <li>Business Partners</li>
          <li>Affiliates</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this policy, you may email us
          at support@finalmovies.com or by post to:
          <br />
          Final Movies
          <br />
          123 Cinema Drive
          <br />
          Film City, FC 90210
          <br />
          USA
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
