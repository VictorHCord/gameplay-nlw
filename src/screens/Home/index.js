import React, { useState } from 'react';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import Profile from '../../components/Profile';
import ListHeader from '../../components/ListHeader';
import Appointment from '../../components/Appointment';
import ListDivider from '../../components/ListDivider';
import Background from '../../components/Background';
import { View, FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Header, Content, Match } from './styles';

const Home = () => {
  const statusbar = `${getStatusBarHeight() + 26}px`
  const [category, setCategory] = useState('');

  const handleCategoryselect = (categoryId) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },

    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 as 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }


  ]

  return (
    <Background>
      <Header statusbar={statusbar}>
        <Profile />
        <ButtonAdd />
      </Header>
      <CategorySelect
        categorySelect={category}
        setCategory={handleCategoryselect}
      />
      <Content>
        <ListHeader
          title={'Partidas agendadas'}
          subtitle={'Total 6'}
        />
        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          style={{ marginTop: 24, marginLeft: 24 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          renderItem={({ item }) => (
            <Appointment data={item} />
          )}
        />
      </Content>
    </Background>
  );
}

export default Home;