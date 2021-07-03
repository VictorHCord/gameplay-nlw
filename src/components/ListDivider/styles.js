import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

export const Divider = styled.View`
  width: 80%;
  height: 1px;
  background-color: ${theme.colors.secondary40};
  margin: 21px 0;
  align-self: flex-end;
`;
