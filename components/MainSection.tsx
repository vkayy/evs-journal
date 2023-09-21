import { ReactNode } from "react";

interface Props {
  id: string;
  heading: string;
  content?: ReactNode;
}

function MainSection({ id, heading, content }: Props) {
  return (
    <section className="general-section general-section_home" id={id}>
      <h2 className="general-section__text_heading text text_heading text_shadow">
        {heading}
      </h2>
      {content}
    </section>
  );
}

export default MainSection;