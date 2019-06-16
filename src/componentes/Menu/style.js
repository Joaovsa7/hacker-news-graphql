import styled from "styled-components";

export const Nav = styled.nav`
  position: absolute;
  height: 100vh;
  width: 60%;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ theme }) => theme.secondaryColor};
  z-index: 1;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 1024px){
    width: 25%;
  }
`;

export const MenuItem = styled.li`
  list-style-type: none;
  font-weight: bold;
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1rem;
  @media screen and (min-width: 568px) {
    font-size: 2rem;
  }
`;

export const MenuItemWrapper = styled.ul`
  display: flex;
  align-items; center;
  flex-direction: column;
  width: 100%;
  margin: 10%;
`;

export const HamburgerMenuWrapper = styled.div`
  height: 20px;
  width: 25px;
  position: absolute;
  top: ${({ insideNav }) => insideNav ? '30px' : '20px'};
  right: 15px;
  cursor: pointer;
`;

export const HamburguerMenuLine = styled.div`
  height: 4px;
  border-radius: 4px;
  width: 100%;
  background-color: ${({ theme, insideNav }) =>
    insideNav ? theme.primaryColor : theme.secondaryColor};
  ${({ insideNav }) =>
    insideNav &&
    `
    &:nth-child(1){
      position: absolute;
      transform: rotate(45deg);
    }
    &:nth-child(2){
      display: none;
    }
    &:nth-child(3){
      position: absolute;
      transform: rotate(-45deg);
    }
  `};
  &:nth-child(2) {
    margin: 5px 0px;
  }
`;
