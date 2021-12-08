import React from "react";
import { SwitchContainer, SwitchButton } from "./SwitchElements.jsx";

const Switch = ({ onClickSwitch, uploadState }) => {
  return (
    <SwitchContainer checked={uploadState} onClick={onClickSwitch}>
      <SwitchButton checked={uploadState} />
    </SwitchContainer>
  );
};

export default Switch;
