import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title } from './styles';
import { BorderlessButton } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme';
import { Feather, Fontisto } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const Header = ({ title, action }) => {
  const navigation = useNavigation();
  const { secondary100, secondary40, heading, primary } = theme.colors;
  const statusbar = `${getStatusBarHeight()}px`

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container
      colors={[secondary100, secondary40]} statusbar={statusbar}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Title>
        {title}
      </Title>
      {action &&
        <View>
          <BorderlessButton>
            <Fontisto name="share" size={24} color={primary} />
          </BorderlessButton>
        </View>
      }
    </Container>
  );
}

export default Header;