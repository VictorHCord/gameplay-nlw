import React from 'react';
import { Container, Title, Subtitle } from './styles';

const ListHeader = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Subtitle>
        {subtitle}
      </Subtitle>
    </Container>
  );
}

export default ListHeader;