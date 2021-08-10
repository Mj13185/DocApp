import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppointmentsTab from '../component/AppointmentsTab';
import {Doctors} from '../data/Doctors';

export default class Appointments extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeading}>My Appointments </Text>
        </View>
        <AppointmentsTab />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeading: {
    fontSize: 22,
  },
});
