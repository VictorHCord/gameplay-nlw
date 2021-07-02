import React from 'react';
import { View } from 'react-native';
import Avatar from '../Avatar';
import { Container, Greeting, User, UserName, Message } from './styles';

const Profile = () => {
  return (
    <Container>
      <Avatar urlImage={'https://github.com/VictorHCord.png'} />
      <View>
        <User>
          <Greeting>Ola</Greeting>
          <UserName>Victor</UserName>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </View>
    </Container>
  );
}

export default Profile;