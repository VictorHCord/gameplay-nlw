import React from 'react';
import { Container } from './styles';
import { theme } from '../../global/styles/theme';

const Background = ({ children }) => {
  const { secondary80, secondary100 } = theme.colors
  return (
    <Container
      colors={[secondary80, secondary100]}>
      {children}
    </Container>
  );
}

export default Background;