import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator();

import Feed from './pages/feed';
import PlaceList from './pages/placeList';
import PlaceDetail from './pages/placeDetail';
import DivulgationList from './pages/divulgationList';
import DivulgationDetail from './pages/divulgationDetail';

export default function routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Feed" component={Feed} />
        <AppStack.Screen name="PlaceList" component={PlaceList} />
        <AppStack.Screen name="PlaceDetail" component={PlaceDetail} />
        <AppStack.Screen name="DivulgationList" component={DivulgationList} />
        <AppStack.Screen name="DivulgationDetail" component={DivulgationDetail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}