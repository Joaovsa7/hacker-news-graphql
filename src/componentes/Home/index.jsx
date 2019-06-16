import React, { useState } from "react";
import { Container, Logo, Main, LinkListWrapper } from "./style";
import { ThemeProvider } from "styled-components";
import LinkList from "../LinkList/index";
import CreateLink from "../CreateLink";
import Header from '../Header';

const Home = ({ themeName, primaryTheme, secondaryTheme }) => (
  <Container>
    <Header />
    <Main>
      <LinkListWrapper>
        <LinkList />
      </LinkListWrapper>
      <CreateLink />
    </Main>
  </Container>
);

export default Home;
