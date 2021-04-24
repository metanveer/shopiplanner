import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";
import { dark, light } from "../configs/colors";

import {
  HeaderRightWrapper,
  HeaderText,
  HeaderWrapper,
  Logo,
} from "./Header.elements";
import Toggle from "./Toggle";

const Header = () => {
  const { setTheme } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(true);

  function handleToggle() {
    setIsActive(isActive ? false : true);
    setTheme(isActive ? dark : light);
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

export default Header;
