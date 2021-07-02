import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondary100};
`;

export const Image = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Title = styled.Text`
  color: ${theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
  font-family: ${theme.fonts.title700};
  line-height: 40px;
`;


export const Content = styled.View`
  margin-top: -40px;
  padding: 0 50px;
`;

export const Description = styled.Text`
  color: ${theme.colors.heading};
  font-size: 15px;
  text-align: center;
  margin-bottom: 64px;
  font-family: ${theme.fonts.title500};
  line-height: 25px;
`;