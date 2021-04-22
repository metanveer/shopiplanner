import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 2000;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  height: 6rem;
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${({ danger }) => (danger ? "red" : "white")};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-basis: 30rem;
  flex-grow: 1;
  flex-shrink: 1;
  font-size: 80%;
`;

export const NotifyMsg = styled.div`
  background-color: rgb(255, 255, 255);
  font-style: italic;
  font-size: 14px;
  color: blue;
`;
