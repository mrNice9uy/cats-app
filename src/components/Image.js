import React from "react";
import { StyledImg } from "../styledComponents/StyledImg";

const Image = ({ src }) => {
  return <StyledImg src={src} alt="pic"></StyledImg>;
};

export default Image;
