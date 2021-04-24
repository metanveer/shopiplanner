import styled from "styled-components";

export const HeaderWrapper = styled.header`
  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.bg};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3px;
`;

export const Logo = styled.p`
  font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 0.2rem;
  text-shadow: ${(p) => p.theme.bigBtnShadow};
`;

export const HeaderText = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  text-shadow: ${(p) => p.theme.bigBtnShadow};
`;

export const HeaderRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const HeaderButton = styled.button``;
