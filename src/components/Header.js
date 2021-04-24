import React, { useState, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "styled-components";
import { dark, light } from "../configs/colors";

import Toggle from "./Toggle";

const Header = () => {
  const { id, setTheme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(id === "light" ? false : true);

  function handleToggle() {
    if (isActive) {
      setTheme(light);
      setIsActive(false);
      localStorage.setItem("shopilistTheme", "light");
    }
    if (!isActive) {
      setTheme(dark);
      setIsActive(true);
      localStorage.setItem("shopilistTheme", "dark");
    }
  }

  return (
    <HeaderWrapper>
      <Logo>Shopilist</Logo>
      <HeaderRightWrapper>
        <HeaderText>Bazar list made easy!</HeaderText>

        <Toggle isActive={isActive} handleToggle={handleToggle} />
      </HeaderRightWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.bg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;
  transition: all 0.2s linear;
`;

const Logo = styled.p`
  font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 0.2rem;
  margin-left: 3px;
  text-shadow: ${(p) => p.theme.bigBtnShadow};
`;

const HeaderText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  text-shadow: ${(p) => p.theme.bigBtnShadow};
`;

const HeaderRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default Header;
