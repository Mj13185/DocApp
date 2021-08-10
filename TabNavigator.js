import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import Home from './screens/Home';
import SearchDoctors from './screens/SearchDoctors';
import Appointments from './screens/Appointments';
import Login from './screens/Login';
// eslint-disable-next-line no-unused-vars
import Menu from './screens/Menu';
import {StatusBar} from 'react-native';
import DoctorProfile from './screens/DoctorProfile';

const HomeStack = createStackNavigator();
const SearchDoctorsStack = createStackNavigator();
const AppointmentsStack = createStackNavigator();
const MenuStack = createStackNavigator();
const LoginScreenStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}
function SearchDoctorsStackScreen() {
  return (
    <SearchDoctorsStack.Navigator>
      <SearchDoctorsStack.Screen
        name="Search"
        component={SearchDoctors}
        options={{
          headerShown: false,
        }}
      />
    </SearchDoctorsStack.Navigator>
  );
}
function AppointmentsStackScreen() {
  return (
    <AppointmentsStack.Navigator>
      <AppointmentsStack.Screen
        name="Appointments"
        component={Appointments}
        options={{headerShown: false}}
      />
    </AppointmentsStack.Navigator>
  );
}

function LoginScreen() {
  return (
    <LoginScreenStack.Navigator>
      <AppointmentsStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </LoginScreenStack.Navigator>
  );
}
function MenuStackScreen() {
  return (
    <MenuStack.Navigator>
      <MenuStack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{headerShown: false}}
      />
    </MenuStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size}) => {
            let iconName;
            let iconColor;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
              iconColor = focused ? '#0A6EBD' : '#d3d3d3';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
              iconColor = focused ? '#0A6EBD' : '#d3d3d3';
            } else if (route.name === 'Appointments') {
              iconName = focused ? 'calendar' : 'calendar';
              iconColor = focused ? '#0A6EBD' : '#d3d3d3';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'grid' : 'grid';
              iconColor = focused ? '#0A6EBD' : '#d3d3d3';
            }

            return <Icon name={iconName} size={size} color={iconColor} />;
          },
        })}
        tabBarOptions={{
          headerShown: false,
          showLabel: false,
          activeTintColor: 'blue',
          inactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchDoctorsStackScreen} />
        <Tab.Screen name="Appointments" component={AppointmentsStackScreen} />
        <Tab.Screen name="Menu" component={MenuStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabNavigator;
