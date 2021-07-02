import React from 'react';
import ButtonIcon from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Container, Image, Content, Title, Description } from './styles'

export default function SignIn() {
  const navigation = useNavigation();
  const HandleSignIn = () => {
    navigation.navigate('Home');
  }

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
        <ButtonIcon
          title="Entrar com Discord"
          onPress={HandleSignIn}
        />
      </Content>
    </Container>
  );
}