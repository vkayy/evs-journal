"use client";

import AboutCard from "./AboutCard";
import MainSection from "./MainSection";

function About() {
  return (
    <MainSection
      id="about-us"
      heading="our first message to you"
      content={
        <ul className="card-list card-list_about">
          <AboutCard
            name="e"
            description="psychology undergraduate - aspiring psychologist"
            about={
              <p>
                hi, im e! im so excited that you’ve found our page and are
                interested in learning more about us :] this space is a passion
                project i share with my partner, born out of our shared values
                and mutual appreciation for self-growth.
                <br />
                <br />
                some of my hobbies include readin -- particularly literature that
                allows me to explore the intricacies of the human mind and the
                depths of philosophical thought.
                <br />
                <br />
                i have always loved dancing as a creative outlet, pursuing such
                from a young age. i try honing my strengths to better connect
                with and comprehend people. these skills, however, are not just
                tools for me; they're a means of fostering deeper understanding
                and empathy.
                <br />
                <br />
                im someone who thrives on novelty and finds fulfillment in
                embracing new experiences and appreciating the world around me,
                but what best excites me is my recent journey of personal
                growth.
                <br />
                <br />
                through this blog, i aim to inspire and offer comfort by sharing
                my experiences, challenges, and triumphs, in hope that the
                ontological perspective that shapes me is one that gives great
                insight and offers comfort to you.
              </p>
            }
            topics={["stoicism", "self-growth", "relationships", "psychology", "dance", "music"]}
          ></AboutCard>
          <AboutCard
            name="v"
            description="computing undergraduate - aspiring software developer"
            about={
              <p>
                what’s up? i’m v, and i'm really grateful to have your interest,
                even if it is momentary to you.
                <br />
                <br />
                i deeply love black cats, music, productivity, and resonate
                profoundly with stoicism, which arguably changed my life.
                <br />
                <br />
                as a person, i’m driven by an incessant desire to know and
                understand, fuelled by challenge and interest. i found passion
                in deconstructing the logic that breathed life into my seemingly
                chaotic environment, which grew to define my character as a
                whole.
                <br />
                <br />
                talent and competency gave me a sense of value, and careful
                analysis of my environment gave me a sense of control. with the
                lessons i've learnt in seeing life through my lens, i hope
                that what i write can become as meaningful to you as it is to
                us.
              </p>
            }
            topics={[
              "stoicism",
              "self-growth",
              "relationships",
              "cats",
              "music",
            ]}
          ></AboutCard>
        </ul>
      }
    ></MainSection>
  );
}

export default About;
