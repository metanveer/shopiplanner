import React from "react";
import styled from "styled-components";

const ToggleWrapper = styled.div`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  display: flex;
  background: ${(p) => p.theme.primary};
`;

const Notch = styled.div`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: ${(p) => (!p.isActive ? `${p.theme.smBtnCheckedBg}` : "white")};
  border-radius: 50%;
  transition: all 0.1s linear;
  transform: translate(${(p) => (!p.isActive ? "26px" : "1px")});
`;

const Toggle = ({ isActive, handleToggle }) => {
  return (
    <ToggleWrapper onClick={handleToggle}>
      <Notch isActive={isActive} />
    </ToggleWrapper>
  );
};

export default Toggle;
