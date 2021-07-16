import React from 'react';
import Background from '../../components/Background';
import Header from '../../components/Header';

const AppointmentDetails = ({ route }) => {
  return (
    <Background>
      <Header
        title="Detalhes"
        action={route.params.action}
      />
    </Background>
  );
}

export default AppointmentDetails;