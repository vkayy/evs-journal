"use client";

import {
  faTiktok,
  faInstagram,
  faDiscord,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Button } from "./ui/button";
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
          <MediaIcon title="@ev_blog" icon={faInstagram} link=""></MediaIcon>
          <MediaIcon title="@ev_blog" icon={faTiktok} link=""></MediaIcon>
          <MediaIcon title="ev's blog community" icon={faDiscord} link="https://discord.gg/P6QT2QjVDP"></MediaIcon>
          <MediaIcon title="ev's linkedin" icon={faLinkedinIn} link=""></MediaIcon>
        </div>
      </article>
      <article className="footer-section__navigation"></article>
    </section>
  );
}

export default Footer;
