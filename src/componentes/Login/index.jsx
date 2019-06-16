import React, { useState } from "react";
import { AUTH_TOKEN } from "../../constants";
import { Container, WrapperLogin, Input, Title, Button, HelperText } from "./style";
import Header from '../Header';

const Login = () => {

  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmail = ({ target }) => setEmail(target.value);
  const handlePassword = ({ target }) => setPassword(target.value);
  const handleName = ({ target }) => setName(target.value);

  const _confirm = async () => {
    // ... you'll implement this 🔜
  }

  const _saveUserData = token => {
    localStorage.setItem(AUTH_TOKEN, token)
  }

  return (
    <Container>
      <Header />
      <WrapperLogin>
      <Title>{login ? "Login" : "Sign Up"}</Title>
        {!login && (
          <Input
            value={name}
            onChange={handleName}
            type="text"
            placeholder="Your name"
          />
        )}
        <Input
          value={email}
          onChange={handleEmail}
          type="text"
          placeholder="Your email address"
        />
        <Input
          value={password}
          onChange={handlePassword}
          type="password"
          placeholder="Choose a safe password"
        />
        <Button onClick={() => _confirm()}>
          {login ? "login" : "create account"}
        </Button>
        <HelperText onClick={() => setLogin(!login)}>
          {login ? "need to create an account?" : "already have an account?"}
        </HelperText>
      </WrapperLogin>
    </Container>
  );
};

export default Login;
