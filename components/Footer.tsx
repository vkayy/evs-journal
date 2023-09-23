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
            title="@ev_blog"
            icon={faInstagram}
            link=""
            content={<p>discover our latest updates on instagram!</p>}
          ></MediaIcon>
          <MediaIcon
            title="@ev_blog"
            icon={faTiktok}
            link=""
            content={<p>join us on our journey on tiktok!</p>}
          ></MediaIcon>
          <MediaIcon
            title="ev's blog community"
            icon={faDiscord}
            link="https://discord.gg/P6QT2QjVDP"
            content={<p>become a part of our vibrant discord community!</p>}
          ></MediaIcon>
          <MediaIcon
            title="ev's exclusives"
            icon={faPatreon}
            link=""
            content={<p>get exclusive access to content on patreon!</p>}
          ></MediaIcon>
        </div>
      </article>
      <article className="footer-section__navigation"></article>
    </section>
  );
}

export default Footer;
