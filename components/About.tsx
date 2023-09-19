import AboutCard from "./AboutCard";
import MainSection from "./MainSection";

function About() {
  return (
    <MainSection
      id="about-us"
      heading="about us"
      content={
        <ul className="card-list card-list_about">
          <AboutCard
            name="e"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. error facilis non provident! minus officiis ab sint libero temporibus repudiandae natus, molestias adipisci quas esse quidem, rem fugit, assumenda nobis aperiam?"
          ></AboutCard>
          <AboutCard
            name="v"
            description="lorem ipsum dolor sit amet consectetur adipisicing elit. error facilis non provident! minus officiis ab sint libero temporibus repudiandae natus, molestias adipisci quas esse quidem, rem fugit, assumenda nobis aperiam?"
          ></AboutCard>
        </ul>
      }
    ></MainSection>
  );
}

export default About;
 