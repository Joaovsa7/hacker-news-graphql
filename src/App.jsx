import React from "react";
import Home from "./componentes/Home";
import { Switch, Route } from "react-router";
import Login from "./componentes/Login";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const App = () => {
  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  #root {
    position: fixed;
  }
  body {
    color: ${({ textColor }) => textColor};
    box-sizing: border-box;
    font-family: helvetica;
  }
  input, select, button {
    border: none;
  }
`;

  const themeName = "dark";

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
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider
        theme={themeName === "dark" ? primaryTheme : secondaryTheme}
      >
        <Switch>
          <Route exact path="/" render={() => <Home themeName={themeName} />} />
          <Route exact path="/submit" render={() => <div>oi</div>} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
