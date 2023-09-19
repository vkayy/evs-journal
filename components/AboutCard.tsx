interface AboutCardProps {
  name: string;
  description: string;
}

function AboutCard({ name, description }: AboutCardProps) {
  return (
    <li className="card_about">
        <h2 className="text card__text_heading text_heading">
            {name}
        </h2>
        <hr className="horizontal-rule"/>
        <p className="text card__text_paragraph text_paragraph">
            {description}
        </p>
    </li>
  );
}

export default AboutCard;
