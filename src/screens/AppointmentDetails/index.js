import React from 'react';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Background from '../../components/Background';
import Header from '../../components/Header';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import ListDivider from '../../components/ListDivider';
import ButtonIcon from '../../components/ButtonIcon';
import { Banner, Title, Subtitle, BannerContainer, Footer } from './styles';

const AppointmentDetails = ({ route }) => {
  const statusbar = `${getStatusBarHeight()}px`

  const members = [
    {
      id: '1',
      username: 'Victor',
      avatar_url: 'https://github.com/VictorHCord.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Fernando',
      avatar_url: 'https://github.com/Lftho.png',
      status: 'offline'
    }
  ]

  return (
    <Background>
      <Header
        title="Detalhes"
        action={route.params.action}
      />

      <Banner source={require('../../assets/banner.png')}>
        <BannerContainer>
          <Title>Lendários</Title>
          <Subtitle>É hoje que vamos chegar ao challenger sem perder uma partida da md10</Subtitle>
        </BannerContainer>
      </Banner>

      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />

      <FlatList data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={{ marginLeft: 24, marginTop: 27 }}
      />
      <Footer statusbar={statusbar}>
        <ButtonIcon title="Entrar na partida" />
      </Footer>
    </Background>
  );
}

export default AppointmentDetails;