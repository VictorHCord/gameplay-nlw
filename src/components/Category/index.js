import React from 'react';
import { RectButton } from 'react-native-gesture-handler'
import { Container, Content, Title, Checking } from './styles';
import { theme } from '../../global/styles/theme';


const Category = ({ title, Icon, checked = false, ...rest }) => {
  const { secondary50, secondary70 } = theme.colors;
  let isChecked = checked;

  return (
    <RectButton {...rest}>
      <Container
        colors={[secondary50, secondary70]}>
        <Content isChecked={isChecked}>
          <Checking isChecked={isChecked} />
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </Content>
      </Container>
    </RectButton>


  );
}

export default Category;