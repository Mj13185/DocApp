/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Dimensions,
  ToastAndroid,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {dummyData} from '../data/Data';
import {categoryData} from '../data/CategoryData';
import {Doctors} from '../data/Doctors';

import Carousel from '../component/Carousel';
import Category from '../component/Category';
import AvailableDoctors from '../component/AvailableDoctors';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default class Home extends Component {
  render() {
    const handlePress = () => {
      ToastAndroid.show('Book Appointment', ToastAndroid.LONG);
    };
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <StatusBar hidden={true} />

          {/*--------------------------ProfileView ----------------------*/}

          <View style={styles.profileView}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.profileImage}
                source={require('../assets/images/profile_1.jpg')}
              />
              <View style={styles.nameView}>
                <Text style={styles.textOne}>Hi,</Text>
                <Text style={styles.textTwo}>Mahendra</Text>
              </View>
            </View>
            <View style={styles.healthDataView}>
              <View style={styles.rowView}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.iconView}
                    source={require('../assets/images/bmi.png')}
                  />
                  <View>
                    <Text style={styles.textOneData}>BMI</Text>
                    <Text style={styles.textTwoData}>50</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.iconView}
                    source={require('../assets/images/meal.png')}
                  />
                  <View>
                    <Text style={styles.textOneData}>Calories</Text>
                    <Text style={styles.textTwoData}>2065Kcal</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.iconView}
                    source={require('../assets/images/height.png')}
                  />
                  <View>
                    <Text style={styles.textOneData}>Height</Text>
                    <Text style={styles.textTwoData}>160cm</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    style={styles.iconView}
                    source={require('../assets/images/height.png')}
                  />
                  <View>
                    <Text style={styles.textOneData}>Weight</Text>
                    <Text style={styles.textTwoData}>50kg</Text>
                  </View>
                </View>
              </View>
              <View
                style={styles.rowViewTwo}
                onStartShouldSetResponder={() => handlePress()}>
                <Text style={styles.textOneData}>No Appointments</Text>
                <Icon name="chevron-right" />
              </View>
            </View>
          </View>

          {/*--------------------------MainView ----------------------*/}
          <View style={styles.homeMainView}>
            <View style={styles.header}>
              <View style={styles.headerLeft}>
                <Text style={styles.headerTextOne}>Find your</Text>
                <Text style={styles.headerTextTwo}>Specialized Doctor</Text>
              </View>
              <View>
                <Image
                  style={{
                    width: 70,
                    height: 60,
                    borderRadius: 40,
                    marginRight: 10,
                  }}
                  source={require('../assets/images/Icon0.png')}
                />
              </View>
            </View>

            {/*--------------------------CarouselView ----------------------*/}
            <View style={styles.carouselView}>
              <Carousel data={dummyData} />
            </View>
            <View>
              <View style={styles.headingCatogery}>
                <Text style={styles.textHeading}>Categories</Text>
                <Text style={styles.textHeadingTwo}>See All</Text>
              </View>
              <View style={{marginLeft: 15, marginRight: 15, marginTop: 10}}>
                <Category data={categoryData} />
              </View>
            </View>
            <View>
              <View style={styles.headingCatogery}>
                <Text style={styles.textHeading}>Available Doctors</Text>
                <Text
                  onPress={() => this.props.navigation.navigate('Search')}
                  style={styles.textHeadingTwo}>
                  See All
                </Text>
              </View>
              <View
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 10,
                }}>
                <AvailableDoctors data={Doctors} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#277bec',
  },
  healthDataView: {
    width: width * 0.85,
    height: 100,
    marginTop: '3%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 15,
    alignSelf: 'center',
    elevation: 10,
    borderColor: '#fff',
  },

  textOneData: {
    fontSize: 12,
    fontFamily: 'Nunito-Bold',
    fontWeight: '600',
    alignSelf: 'center',
  },
  textTwoData: {
    fontSize: 10,
    fontFamily: 'Nunito-Regular',
    alignSelf: 'center',
  },
  iconView: {
    width: 25,
    height: 25,
    padding: 5,
    marginRight: 3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  rowView: {
    flex: 0.65,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rowViewTwo: {
    flex: 0.35,
    flexDirection: 'row',
    width: width * 0.85,
    borderTopColor: '#CDCDCD',
    borderTopWidth: 1,
    paddingLeft: 20,
    paddingRight: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileView: {
    display: 'flex',
    flex: 1,
    maxHeight: height / 2,
    marginTop: '10%',
  },
  image: {
    width: width,
    height: height,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginLeft: 30,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: 0.9,
  },

  nameView: {flex: 1, flexDirection: 'column', padding: 15, marginLeft: 10},
  textOne: {
    fontSize: 25,
    color: '#FFF',
    fontFamily: 'Nunito-LightItalic',
  },
  textTwo: {
    fontSize: 25,
    fontWeight: '300',
    color: '#FFF',
    fontFamily: 'Nunito-SemiBold',
  },

  homeMainView: {
    flex: 1,
    width: width,
    height: '100%',
    marginTop: '5%',
    backgroundColor: '#fff',
    borderTopRightRadius: 90,
    paddingTop: 15,
    shadowColor: '#fff',
    paddingBottom: 50,

    elevation: 5,
  },
  header: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    maxHeight: 50,
    margin: 15,
  },

  headerTextOne: {
    fontSize: 25,
    fontFamily: 'Nunito-ExtraLight',
    color: '#707C80',
  },
  headerTextTwo: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Bold',
    color: '#555F61',
  },
  headingCatogery: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 25,
    paddingRight: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  textHeading: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    color: '#555F61',
  },
  textHeadingTwo: {
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
    color: '#555F61',
  },
});
