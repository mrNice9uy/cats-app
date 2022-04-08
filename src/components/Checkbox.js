import React from "react";
import {
  CheckboxContainer,
  HiddenCheckbox,
  Icon,
  StyledCheckbox,
} from "../styledComponents/StyledCheckboxes";

const Checkbox = (props) => {
  console.log(props);
  return (
    <CheckboxContainer>
      <HiddenCheckbox {...props} />
      <StyledCheckbox checked={props.checked}>
        <Icon viewBox="0 0 24 54">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;
