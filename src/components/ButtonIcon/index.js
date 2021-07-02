import React from 'react';
import { Container, Image, Wrapper, Text } from './styles';

const ButtonIcon = ({ title , ...rest }) => {
  return (
    <Wrapper {...rest}>
      <Container>
        <Image source={require('../../assets/discord.png')} />
      </Container>
      <Text>{title}</Text>
    </Wrapper>
  );
}

export default ButtonIcon;