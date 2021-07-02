import React from 'react';
import { Container, Image, Wrapper, Text } from './styles';

const ButtonIcon = () => {
  return (
    <Wrapper>
      <Container>
        <Image source={require('../../assets/discord.png')} />
      </Container>
      <Text>Entrar com Discord</Text>
    </Wrapper>
  );
}

export default ButtonIcon;