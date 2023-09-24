interface MainProps {
  id: string;
  heading: string;
  content?: React.ReactNode;
}

function MainSection({ id, heading, content }: MainProps) {
  return (
    <section className="general-section" id={id}>
      <h2 className="general-section__text_heading text text_heading text_shadow general-section__entry-animation general-section__entry-animation_top">
        {heading}
      </h2>
      <div className="general-section__content general-section__entry-animation general-section__entry-animation_bottom">{content}</div>
    </section>
  );
}

export default MainSection;
