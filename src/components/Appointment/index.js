import React from 'react';
import GuildIcon from '../GuildIcon';
import PlayerSvg from '../../assets/player.svg';
import CalenderSvg from '../../assets/calendar.svg';
import { RectButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { categories } from '../../utils/categories';
import { Container, Content, Header, Title, Category, PlayersInfo, Player, Footer, DateInfo, DateText } from './styles';

const Appointment = ({ data, ...rest }) => {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors
  return (
    <RectButton {...rest}>
      <Container>
        <GuildIcon />
        <Content>
          <Header>
            <Title> {data.guild.name}</Title>
            <Category>{category.title}</Category>
          </Header>

          <Footer>
            <DateInfo>
              <CalenderSvg />
              <DateText>
                {data.date}
              </DateText>
            </DateInfo>

            <PlayersInfo>
              <PlayerSvg fill={owner ? primary : on} />
              <Player owner={owner}> {owner ? 'Anfitrião' : 'Visitante'}</Player>
            </PlayersInfo>
          </Footer>
        </Content>
      </Container>
    </RectButton>
  );
}

export default Appointment;