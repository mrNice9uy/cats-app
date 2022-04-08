import React from "react";
import { StyledButton } from "../styledComponents/StyledButton";

const Button = ({ isDisabled, setNewUrl }) => {
  return (
    <StyledButton disabled={isDisabled} onClick={setNewUrl}>
      Get cat
    </StyledButton>
  );
};

export default Button;
