import React from "react";
import { HeaderWrapper, Logo } from './style';
import Menu from "../Menu";

const Header = () => (
  <HeaderWrapper>
    <Logo> HackerNews </Logo>
    <Menu />
  </HeaderWrapper>
);

export default Header;