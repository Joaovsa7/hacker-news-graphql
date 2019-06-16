import styled from "styled-components";

export const LinkWrapper = styled.div`
  min-height: 35px;
  display: flex;
  align-items: center;
  padding: 0px 5px;
  background-color: ${({ theme }) => theme.secondaryColor};
  border-radius: 4px;
  margin: 10px 0px;
`;

export const NewsLink = styled.span`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 14px;
`;
