import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Text } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container >
      <Text onPress={() => {
        navigation.navigate('Dashboard');
      }}>
        Hello World

      </Text>
    </Container>
  );
}

export default Home;
