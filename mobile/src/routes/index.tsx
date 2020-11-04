import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor:'#312E38' }
    }}
  >
    <App.Screen name="Home" component={Home} />
    <App.Screen name="Dashboard" component={Dashboard} />
  </App.Navigator>
);

export default AppRoutes;
