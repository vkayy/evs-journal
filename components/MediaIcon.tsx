import Link from "next/link";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface MediaIconProps {
  title: string;
  description?: string;
  link: string;
  icon: IconProp;
}

function MediaIcon({ title, description, link, icon }: MediaIconProps) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="footer-section__social"
          asChild
        >
          <Link href={link} target="_blank">
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
          </Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="footer-section__hover-content">
          <Avatar>
            <AvatarImage
              className="footer-section__avatar-image"
              src=""
            ></AvatarImage>
            <AvatarFallback className="footer-section__avatar-fallback">
              EV
            </AvatarFallback>
          </Avatar>
          <div className="footer-section__hover-text">
            <h4 className="footer-section__hover-heading">{title}</h4>
            <p className="footer-section__hover-paragraph">{description}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default MediaIcon;
