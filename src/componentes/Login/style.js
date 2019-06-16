import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primaryColor};
  color: ${({ theme }) => theme.secondaryColor};
`;

export const WrapperLogin = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  max-width: 75vw;
  margin: 0 auto;
  @media screen and (min-width: 568px) {
    max-width: 500px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Input = styled.input.attrs(props => ({
  type: props.type
}))`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryColor};
  font-size: 1em;
  font-weight: bold;
  border-radius: 4px;
  margin: 5px 0px;
  padding-left: 15px;
  &::placeholder {
    font-size: 0.8em;
    padding-left: 5px;
  }
`;

export const Button = styled.button`
  padding: 0;
  height: 45px;
  width: 100px;
  margin: 10px 0px;
  background-color: ${({ theme }) => theme.secondaryColor};
  color: ${({ theme }) => theme.primaryColor};
  font-weight: bold;
  border-radius: 100px;
  cursor: pointer;
  @media screen and (min-width: 568px) {
    width: 120px;
  }
`;

export const HelperText = styled.div`
  width: 100%;
  font-weight: bold;
  margin: 5px 0px;
  text-align: center;
  cursor: pointer;
`;