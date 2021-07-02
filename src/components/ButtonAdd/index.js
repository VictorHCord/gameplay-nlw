import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from './styles';
import { theme } from '../../global/styles/theme';


const ButtonAdd = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <MaterialCommunityIcons name="plus" size={24} color={theme.colors.heading} />
    </Container>
  );
}

export default ButtonAdd;