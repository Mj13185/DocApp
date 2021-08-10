import React, {Component} from 'react';
import {StatusBar, Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Feather';
import MyTabs from '../component/Tabs';

export default class SearchDoctors extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerTextOne}> Available</Text>
            <Text style={styles.headerTextTwo}> Specialists</Text>
          </View>
          <View style={styles.headerRight}>
            <Icon name="search" size={30} color="#555F61" />
          </View>
        </View>
        <MyTabs />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTextOne: {
    fontFamily: 'Nunito-Light',
    fontSize: 30,
    color: '#707C80',
  },
  headerTextTwo: {
    fontFamily: 'Nunito-Bold',
    fontSize: 30,
    color: '#555F61',
  },
  header: {
    marginTop: 25,
    color: '#fff',
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 10,
  },
  headerLeft: {
    flexDirection: 'column',
  },
  headerRight: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
