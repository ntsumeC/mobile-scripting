import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './MenuScreen';
import AddDishScreen from './AddDishScreen';
import 'react-native-gesture-handler';


export type RootStackParamList = {
  Menu: undefined;
  AddDish: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerShown: false, // Hide the header if desired
        }}
      >
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="AddDish" component={AddDishScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;