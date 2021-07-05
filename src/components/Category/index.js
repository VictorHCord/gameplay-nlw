import React from 'react';
import { RectButton } from 'react-native-gesture-handler'
import { Container, Content, Title, Checking } from './styles';
import { theme } from '../../global/styles/theme';


const Category = ({ title, Icon, checked = false, hasCheckBox = true ,  ...rest }) => {
  const { secondary40 ,  secondary50, secondary70, secondary85 } = theme.colors;
  let isChecked = checked;

  return (
    <RectButton {...rest}>
      <Container
        colors={[secondary50, secondary70]}>
        <Content
          isChecked={isChecked}
          colors={[isChecked ? secondary85 : secondary50 , secondary40]}>
          {hasCheckBox && <Checking isChecked={isChecked} />  }
          <Icon width={48} height={48} />
          <Title>{title}</Title>
        </Content>
      </Container>
    </RectButton>


  );
}

export default Category;