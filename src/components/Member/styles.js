import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletStatus = styled.View`
  background-color: ${props => props.isOnline ? theme.colors.on : theme.colors.primary};
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 9px;
`;

export const NameStatus = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 13px;
`;
