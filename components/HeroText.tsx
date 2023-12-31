import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./ui/button";

function HeroText() {
  return (
    <article className="hero-section__article hero-section__article_left hero-section__entry-animation hero-section__entry-animation_left">
      <h2 className="text hero-section__text hero-section__text_heading text_heading text_shadow">
        two minds,&nbsp;
        <br className="hidden sm:block" />
        one heart.
      </h2>
      <p className="text hero-section__text hero-section__text_paragraph text_paragraph text_shadow">
        our insights on the world, cultivated by the experiences that shaped us.
      </p>
      <Button
        className="button hero-section__button button_hover_shadow button_active_scale button_active_shadow"
        asChild
      >
        <Link href="/journal">
          explore our journal! &nbsp;
          <FontAwesomeIcon icon={faBookBookmark}></FontAwesomeIcon>
        </Link>
      </Button>
    </article>
  );
}

export default HeroText;
