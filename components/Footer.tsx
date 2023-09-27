"use client";

import {
  faTiktok,
  faInstagram,
  faDiscord,
  faPatreon,
} from "@fortawesome/free-brands-svg-icons";

import MailingListForm from "./MailingListForm";
import MediaIcon from "./MediaIcon";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer-section" id="socials">
        <article className="footer-section__article">
          <p className="footer-section__text footer-section__text_paragraph">
            interested?
          </p>
          <h2 className="footer-section__text footer-section__text_heading">
            join our community!
          </h2>
          <MailingListForm></MailingListForm>
          <div className="footer-section__social-links">
            <MediaIcon
              title="@evsjournal"
              icon={faInstagram}
              link=""
              content={<p>discover our latest updates on instagram!</p>}
            ></MediaIcon>
            <MediaIcon
              title="@evsjournal"
              icon={faTiktok}
              link=""
              content={<p>catch up with our journey on tiktok!</p>}
            ></MediaIcon>
            <MediaIcon
              title="journal with ev"
              icon={faDiscord}
              link=""
              content={<p>be a part of our vibrant discord community!</p>}
            ></MediaIcon>
            <MediaIcon
              title="ev's exclusives"
              icon={faPatreon}
              link=""
              content={<p>get exclusive access to content on patreon!</p>}
            ></MediaIcon>
          </div>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
