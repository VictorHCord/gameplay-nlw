import React from 'react';
import { Header } from './styles';
import { View } from 'react-native';
import Profile from '../../components/Profile';
import ButtonAdd from '../../components/ButtonAdd';

const Home = () => {
  return (
    <View>
      <Header>
        <Profile />
        <ButtonAdd />
      </Header>
    </View>
  )
}

export default Home;