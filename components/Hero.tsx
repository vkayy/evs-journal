import HeroText from "./HeroText";
import Image from "next/image";
import marcusaurelius from "../public/marcusaurelius.png";

function Hero() {
  return (
    <section id="home" className="hero-section">
      <HeroText></HeroText>
      <article className="hero-section__article hero-section__article_right">
        <Image
          src={marcusaurelius}
          alt="statue of marcus aurelius' bust"
          className="image image_shadow"
        ></Image>
      </article>
    </section>
  );
}

export default Hero;
