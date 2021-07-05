import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Divider = styled.View`
  width: 78%;
  height: 1px;
  background-color: ${theme.colors.secondary40};
  margin-top: 2px;
  align-self: flex-end;
`;
