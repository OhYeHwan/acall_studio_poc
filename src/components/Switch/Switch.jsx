import React, { useState } from "react";
import { SwitchContainer, SwitchButton } from "./SwitchElements.jsx";

const Switch = (props) => {
  const [checked, setChecked] = useState(false);

  const onClick = () => {
    setChecked(!checked);
  };

  return (
    <SwitchContainer checked={checked} onClick={onClick}>
      <SwitchButton checked={checked} />
    </SwitchContainer>
  );
};

export default Switch;
