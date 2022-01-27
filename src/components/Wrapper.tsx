import { FC, ReactChild } from 'react';
import styled from 'styled-components';

export const Wrapper: FC<ReactChild> = ({ children }) => {
  return <GlobalWrapper>{children}</GlobalWrapper>;
};

const GlobalWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: antiquewhite;
  color: black;
`;
