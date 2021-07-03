import styled from 'styled-components/native';

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${props => props.statusbar};
  margin-bottom: 42px;
`;

export const Content = styled.View`
  margin-top: 42px;
`;
