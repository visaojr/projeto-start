import React from 'react';

import { Container, Text } from './styles';
import { useNavigation } from '@react-navigation/native';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container >
      <Text onPress={() => {
        navigation.navigate('Home');
      }}>
        Voltar

      </Text>
    </Container>
  );
}

export default Dashboard;
