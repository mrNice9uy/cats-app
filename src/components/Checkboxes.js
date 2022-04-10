import React, { useEffect } from "react";
import Checkbox from "./Checkbox";
import {
  StyledCheckWrapper,
  StyledLabel,
} from "../styledComponents/StyledCheckboxes";

const Checkboxes = (props) => {
  const { enabled, refresh, setEnabled, setRefresh } = props;

  useEffect(() => {
    if (enabled === false) {
      setRefresh(false);
    }
  }, [enabled, setRefresh]);

  return (
    <StyledCheckWrapper>
      <StyledLabel>
        <Checkbox checked={enabled} onChange={() => setEnabled(!enabled)} />
        <span>Enabled</span>
      </StyledLabel>
      <StyledLabel>
        <Checkbox
          disabled={!enabled}
          checked={refresh}
          onChange={() => setRefresh(!refresh)}
        />
        <span>Auto-refresh every 5 seconds</span>
      </StyledLabel>
    </StyledCheckWrapper>
  );
};

export default Checkboxes;
