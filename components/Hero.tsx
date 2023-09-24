import HeroText from "./HeroText";
import Image from "next/image";
import marcusaurelius from "../public/marcusaurelius.png";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <HeroText></HeroText>
      <article className="hero-section__article hero-section__article_right hero-section__entry-animation hero-section__entry-animation_right">
        <Image
          src={marcusaurelius}
          alt="statue of marcus aurelius' bust"
          className="image image_shadow"
          priority
        ></Image>
      </article>
    </section>
  );
}

export default Hero;
