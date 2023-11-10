import Link from "next/link";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import evIcon from "../app/apple-icon.png";

interface MediaIconProps {
  title: string;
  content?: React.ReactNode;
  link: string;
  icon: IconProp;
}

function MediaIcon({ title, content, link, icon }: MediaIconProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="footer-section__social hover:footer-section__social_hover_spin"
          asChild
        >
          <Link href={link} target="_blank">
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          </Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="footer-section__hover-content">
        <div className="footer-section__hover-container">
          <Avatar>
            <AvatarImage
              className="footer-section__avatar-image"
              src={evIcon.src}
            ></AvatarImage>
            <AvatarFallback className="footer-section__avatar-fallback">
              EV
            </AvatarFallback>
          </Avatar>
          <div className="footer-section__hover-main">
            <h4 className="footer-section__hover-heading">{title}</h4>
            <p className="footer-section__hover-paragraph">{content}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default MediaIcon;
