import styled from "styled-components";

export const Card = styled.div`
  border-radius: 10px 10px 10px 10px;
  border: 0px solid #000000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  flex: 1 1 20rem;
  /* height: ${(p) => (p.longHeight ? "14rem" : "13rem")}; */
  padding: 0.5rem;
  margin: 0.8rem 0.4rem;

  background-color: ${(p) =>
    p.danger ? `${p.theme.itemCardDanger}` : `${p.theme.cardBg}`};
  z-index: ${({ danger }) => (danger ? "999" : "0")};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transition: all 0.2s linear;
`;

export const LeftButtonsContainer = styled.div`
  flex: 0 0 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const RightContent = styled.div`
  flex: 1 0 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightColumnOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const RightColumnTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CompareTexts = styled.div`
  width: 10em;
  margin: 0 5px;
  overflow: hidden;
  color: ${(p) => p.theme.text};
  font-weight: 300;
  font-size: 1.4rem;
  font-style: italic;
`;

export const Input = styled.input`
  padding: 5px;
  margin: 3px;
  font-size: 16px;
  font-family: inherit;
  text-align: center;
  font-weight: 300;
  background-color: ${(p) => p.theme.bg};
  color: ${(p) => p.theme.text};
  border-radius: 5px;
  border: 1px solid ${(p) => p.theme.inputBorder};
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}` : "50px")};
  transition: all 0.2s linear;
  &:focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  color: ${(p) => p.theme.text};
  font-weight: 300;
  font-size: 1.6rem;
  font-style: italic;
`;

export const SmallButton = styled.button`
  color: ${(p) => p.theme.smBtnText};
  font-size: 20px;
  height: 37px;
  width: 37px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(p) =>
    p.checked ? `${p.theme.smBtnCheckedBg}` : `${p.theme.smBtnBg}`};
  outline: none;
  border: none;
  margin: 2px;

  &:hover {
    background: ${({ checked, theme }) =>
      checked ? `${theme.smBtnCheckedBg}` : `${theme.smBtnHoverBg}`};
  }
`;
