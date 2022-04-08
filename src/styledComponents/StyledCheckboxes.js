import styled from "styled-components";

export const StyledCheckWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  // Hide checkbox visually but remain accessible to screen readers.
  // Source: https://polished.js.org/docs/#hidevisually
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 4px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  border: 1px solid gray;
  background: #dfdfdf;
  border-radius: 3px;
  transition: all 150ms;
  vertical-align: top;

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }

  ${HiddenCheckbox}:disabled + & {
    opacity: 0.2;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.5rem;
`;

export const StyledLabel = styled.label`
  margin-bottom: 1rem;
`;
