import React from 'react';
import { View } from 'react-native';
import Avatar from '../Avatar';
import { Container, Title, NameStatus, Status, BulletStatus } from './styles';

const Member = ({ data }) => {
  const isOnline = data.status == 'online'
  return (
    <Container>
      <Avatar urlImage={data.avatar_url} />

      <View>
        <Title>
          {data.username}
        </Title>

        <Status>
          <BulletStatus isOnline={isOnline} />
          <NameStatus>{isOnline ? 'Disponivel' : 'Ocupado'}</NameStatus>
        </Status>
      </View>

    </Container>
  );
}

export default Member;