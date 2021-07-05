import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme';

export const Container = styled(LinearGradient)`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`;

export const Content = styled(LinearGradient)`
  width: 100px;
  height: 116px;
  opacity: ${props => props.isChecked ? 1 : 0.5};
  border-radius: 8px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

export const Checking = styled.View`
    position: absolute;
    top: 7px;
    right: 7px;
    width: ${props => props.isChecked ? '10px' : '12px'};
    height: ${props => props.isChecked ? '10px' : '12px'};
    background-color: ${props => props.isChecked ? theme.colors.primary : theme.colors.secondary100};
    border-color: ${theme.colors.secondary50};
    border-width: 2px;
    border-radius: 3px;

`;

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 15px;
`;