import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  flex: 1 1 20rem;
  height: 9rem;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${({ danger }) =>
    danger ? "rgb(225 134 17 / 76%)" : "white"};
  z-index: ${({ danger }) => (danger ? "999" : "0")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  flex: ${({ fixed }) => (fixed ? "0 0 1rem" : "1 1 1rem")};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CompareTexts = styled.div`
  width: 10em;
  font-size: 0.95em;
  margin: 0 5px;
  overflow: hidden;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 3px;
  font-size: 16px;
  font-family: inherit;
  font-weight: 300;
  border-width: 1px;
  border-color: #cccccc;
  background-color: #fff;
  color: #000000;
  border-style: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}` : "50px")};

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  color: black;
  font-size: 20px;
  height: 30px;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: ${({ checked }) => (checked ? "rgb(16, 214, 16)" : "#ccc")};
  outline: none;
  border: none;
  margin: 2px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${({ checked }) => (checked ? "rgb(16, 214, 16)" : "#999")};
  }
`;
