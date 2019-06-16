import React, { useState } from "react";
import {
  Nav,
  HamburgerMenuWrapper,
  HamburguerMenuLine,
  MenuItemWrapper,
  MenuItem
} from "./style";

const Menu = () => {

  const [openNav, setOpenNav] = useState(false);
  
  const handleOpenNav = () => (openNav ? setOpenNav(false) : setOpenNav(true));

  return (
    <>
      {!openNav ? (
        <HamburgerMenuWrapper onClick={handleOpenNav}>
          <HamburguerMenuLine />
          <HamburguerMenuLine />
          <HamburguerMenuLine />
        </HamburgerMenuWrapper>
      ) : (
        <Nav openNav>
          <MenuItemWrapper>
            <HamburgerMenuWrapper onClick={handleOpenNav} insideNav>
              <HamburguerMenuLine insideNav />
              <HamburguerMenuLine insideNav />
              <HamburguerMenuLine insideNav />
            </HamburgerMenuWrapper>
            <MenuItem>Início</MenuItem>
            <MenuItem>Login</MenuItem>
          </MenuItemWrapper>
        </Nav>
      )}
    </>
  );
};

export default Menu;
