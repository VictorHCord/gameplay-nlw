import React from 'react';
import ButtonIcon from '../../components/ButtonIcon';
import { Container, Image, Content, Title, Description } from './styles'

export default function SignIn() {
  return (
    <Container>
      <Image source={require('../../assets/illustration.png')} resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se {`\n`}
          e organize suas{`\n`}
          jogatinas</Title>
        <Description>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </Description>
        <ButtonIcon />
      </Content>
    </Container>
  );
}