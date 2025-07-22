import React from "react";
import styles from "./PageStyles.module.css";

function Terms() {
  return (
    <div className={`${styles.pageContainer} container`}>
      <h1 className={styles.pageTitle}>Terms of Service</h1>
      <section className={styles.pageContent}>
        <p>
          Welcome to Final Movies! These terms and conditions outline the rules
          and regulations for the use of Final Movies' Website, located at [Your
          Website URL].
        </p>
        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Final Movies if you do not agree to
          take all of the terms and conditions stated on this page.
        </p>
        <h2>License</h2>
        <p>
          Unless otherwise stated, Final Movies and/or its licensors own the
          intellectual property rights for all material on Final Movies. All
          intellectual property rights are reserved. You may access this from
          Final Movies for your own personal use subjected to restrictions set
          in these terms and conditions.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Republish material from Final Movies</li>
          <li>Sell, rent or sub-license material from Final Movies</li>
          <li>Reproduce, duplicate or copy material from Final Movies</li>
          <li>Redistribute content from Final Movies</li>
        </ul>
        <h2>User Comments</h2>
        <p>This Agreement shall begin on the date hereof.</p>
        <p>
          Parts of this website offer an opportunity for users to post and
          exchange opinions and information in certain areas of the website.
          Final Movies does not filter, edit, publish or review Comments prior
          to their presence on the website. Comments do not reflect the views
          and opinions of Final Movies,its agents and/or affiliates. Comments
          reflect the views and opinions of the person who post their views and
          opinions. To the extent permitted by applicable laws, Final Movies
          shall not be liable for the Comments or for any liability, damages or
          expenses caused and/or suffered as a result of any use of and/or
          posting of and/or appearance of the Comments on this website.
        </p>
        <h2>Hyperlinking to our Content</h2>
        <p>
          The following organizations may link to our Website without prior
          written approval:
        </p>
        <ul>
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses;
            and
          </li>
          <li>
            System wide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Web site.
          </li>
        </ul>
        <p>
          We may consider and approve other link requests from the following
          types of organizations:
        </p>
        <ul>
          <li>commonly-known consumer and/or business information sources;</li>
          <li>dot.com community sites;</li>
          <li>associations or other groups representing charities;</li>
          <li>online directory distributors;</li>
          <li>internet portals;</li>
          <li>accounting, law and consulting firms; and</li>
          <li>educational institutions and trade associations.</li>
        </ul>
      </section>
    </div>
  );
}

export default Terms;
