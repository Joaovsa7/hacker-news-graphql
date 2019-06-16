import React, { useState } from "react";
import { Container, Logo, Main, LinkListWrapper, Header } from "./style";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import LinkList from "../LinkList/index";
import CreateLink from "../CreateLink";
import Menu from '../Menu';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    color: ${({ textColor }) => textColor}
    box-sizing: border-box;
    font-family: helvetica;
  }
`;

const Home = () => {
  const [themeName, setThemeName] = useState("dark");

  const primaryTheme = {
    primaryColor: "black",
    secondaryColor: "white",
    textColor: "white",
    btnColor: "orange"
  };

  const secondaryTheme = {
    primaryColor: "white",
    secondaryColor: "black",
    btnColor: "red"
  };

  return (
    <ThemeProvider theme={themeName === "dark" ? primaryTheme : secondaryTheme}>
      <Container>

        <GlobalStyle />

        <Header>
          <Logo> HackerNews </Logo>
          <Menu />
        </Header>

        <Main>
          <LinkListWrapper>
            <LinkList />
          </LinkListWrapper>
          <CreateLink />

        </Main>
      </Container>

    </ThemeProvider>
  );
};

export default Home;
