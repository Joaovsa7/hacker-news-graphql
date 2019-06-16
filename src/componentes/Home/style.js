import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.main`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const LinkListWrapper = styled.div`
  position: relative;
`;

export const Logo = styled.h1`
  margin-left: 15px;
  font-size: 2rem;
`;
