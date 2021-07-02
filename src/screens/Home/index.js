import React from 'react';
import { Container, Header, Text } from './styles';
import Profile from '../../components/Profile';

const Home = () => {
  return (
    <Container>
      <Header>
      <Profile />
      </Header>
    </Container>
  )
}

export default Home;