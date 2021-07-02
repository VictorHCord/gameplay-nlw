import React from 'react';
import { Container, Image } from './styles';
import { theme } from '../../global/styles/theme';

const Avatar = ({ urlImage }) => {
  const { secondary50, secondary70 } = theme.colors

  return (
    <Container
    colors={[secondary50, secondary70]}>
    <Image source={{ uri: urlImage }} />
  </Container>
  );
}

export default Avatar;