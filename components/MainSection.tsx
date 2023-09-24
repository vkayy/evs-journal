interface MainProps {
  id: string;
  heading: string;
  content?: React.ReactNode;
}

function MainSection({ id, heading, content }: MainProps) {
  return (
    <section className="general-section" id={id}>
      <h2 className="general-section__text_heading text text_heading text_shadow">
        {heading}
      </h2>
      {content}
    </section>
  );
}

export default MainSection;
