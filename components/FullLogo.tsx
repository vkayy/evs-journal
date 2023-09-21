import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function FullLogo() {
  return (
    <h1 className="logo navbar__logo">
      ev <FontAwesomeIcon icon={faShieldHeart}></FontAwesomeIcon>
    </h1>
  );
}

export default FullLogo;
