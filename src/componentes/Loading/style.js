import styled, { keyframes } from "styled-components";

const LoadingToTop = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(15px);
  }
  50% {
    transform: translateY(-15px);
  }
  75% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const LoadingToBottom = keyframes`
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-15px);
  }
  50% {
    transform: translateY(15px);
  }
  75% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-height: 30px;
  max-width: 100px;
`;

export const Dots = styled.span`
  padding: 8px;
  border-radius: 100px;
  background-color: ${( { theme } ) => theme.secondaryColor}
  &:nth-child(1) {
    animation: ${LoadingToTop} 3s infinite;
  }
  &:nth-child(2) {
    animation: ${LoadingToBottom} 3s infinite;
  }
  &:nth-child(3) {
    animation: ${LoadingToTop} 3s infinite;
  }
`;
