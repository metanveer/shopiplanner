import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}

body {
  margin: 0 0;
  box-sizing: border-box;
  background-color: ${(p) => p.theme.bg};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
}

h1 {
  margin: 0 0;
}

p {
  margin: 0;
  padding: 0;
}

`;

export const Container = styled.div`
  min-width: 300px;
  max-width: 450px;
  margin: 0 auto;
  padding: 0 0;
  text-align: center;
`;

export const Button = styled.button`
  font-size: 22px;
  box-shadow: 0px 0px 20px 0px ${(p) => p.theme.bigBtnShadow};
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  color: ${(p) => p.theme.textLight};
  background: ${({ danger, theme }) =>
    danger ? `${theme.danger}` : `${theme.primary}`};
  outline: none;
  border: none;
  margin: 5px;
  padding: 0px 0px;

  &:hover {
    color: ${(p) => p.theme.text};
    background: ${(p) => p.theme.tertiary};
  }

  @media only screen and (max-width: 500px) {
    &:hover {
      color: ${(p) => p.theme.text};
      background: ${(p) => p.theme.primary};
    }
  }

  @media print {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 22px;
  box-shadow: 0px 0px 20px 0px ${(p) => p.theme.bigBtnShadow};
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  color: ${(p) => p.theme.textLight};

  outline: none;
  border: none;
  margin: 5px;
  padding: 0px 0px;

  &:hover {
    color: ${(p) => p.theme.text};
    background: ${(p) => p.theme.tertiary};
  }

  @media print {
    display: none;
  }
`;

export const CenterButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default GlobalStyle;
