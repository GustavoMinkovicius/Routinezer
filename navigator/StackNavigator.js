import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TaskScreen from '../screens/TaskScreen';
import CreateTaskScreen from '../screens/CreateTaksScreen';
import EditeTask from '../screens/EditeTaskScreen';
import Signup from '../screens/signup'
import Home from '../screens/Home'
const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="TaskScreen" component={TaskScreen} />
      <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} />
      <Stack.Screen name="EditeTask" component={EditeTask} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;