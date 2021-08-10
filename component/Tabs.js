import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Doctors} from '../data/Doctors';
import DoctorsTab from './DoctorsTab';

const Tab = createMaterialTopTabNavigator();

function TabOne() {
  return <DoctorsTab data={Doctors} />;
}
function TabTwo() {
  return <DoctorsTab data={Doctors} />;
}
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Nurologists" component={TabOne} />
      <Tab.Screen name="Cardiologists" component={TabTwo} />
    </Tab.Navigator>
  );
}
export default MyTabs;
