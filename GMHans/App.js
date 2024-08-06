import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Paywall from './screens/Paywall';
import Settings from './screens/Settings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{
        headerShown: false}}>
        <Stack.Screen 
          name="Splash"
          component={Splash}
        />
        <Stack.Screen 
          name="Onboarding"
          component={Onboarding}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
        />
        <Stack.Screen 
          name="Paywall"
          component={Paywall}
        />
        <Stack.Screen 
          name='Settings'
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
