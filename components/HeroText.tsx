import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

function HeroText() {
  return (
    <article className="hero-section__article hero-section__article_left">
      <h2 className="text hero-section__text hero-section__text_heading text_heading text_shadow">
        two minds,
        <br />
        one heart.
      </h2>
      <p className="text hero-section__text hero-section__text_paragraph text_paragraph text_shadow">
        our insights on the world, cultivated by the experiences that shaped us.
      </p>
      {/* <Link href="/blog" className="button hero-section__button button_hover_shadow button_hover_invert button_active_scale button_active_shadow">
        explore our blog! &nbsp;
        <FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon>
      </Link> */}
      <Button className="button hero-section__button button_hover_shadow button_active_scale button_active_shadow" asChild>
        <Link href="/blog">
          explore our blog! &nbsp;
          <FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon>
        </Link>
      </Button>
    </article>
  );
}

export default HeroText;
