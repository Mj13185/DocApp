import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Apointments_upcoming from './Apointments_upcoming';
import Appointments_past from './Appointments_past';

const Tab = createMaterialTopTabNavigator();

function AppointmentsTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Upcoming" component={Apointments_upcoming} />
      <Tab.Screen name="Past" component={Appointments_past} />
    </Tab.Navigator>
  );
}
export default AppointmentsTab;
