/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AvailableDoctors from '../component/AvailableDoctors';
import {Doctors} from '../data/Doctors';

export default class DoctorProfile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
            <Icon name="arrow-left" size={24} color="#52575D" />
          </View>

          <Image
            source={require('../assets/images/doctor_1.png')}
            style={styles.image}
          />

          <View style={styles.infoContainer}>
            <Text style={[styles.text, {fontWeight: '200', fontSize: 36}]}>
              Dr.Rajesh
            </Text>
            <Text
              style={[
                styles.text,
                styles.subText,
                {color: '#AEB5BC', fontSize: 20},
              ]}>
              Medicine Specialist
            </Text>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity
              style={[styles.btnStyle, {backgroundColor: '#73EEDC'}]}>
              <Icon name="phone" size={18} color="#fff" style={{padding: 5}} />
              <Text style={styles.btnText}>Voice Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnStyle, {backgroundColor: '#E88D67'}]}>
              <Icon name="video" size={18} color="#fff" style={{padding: 5}} />

              <Text style={styles.btnText}>Video Call</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btnStyle, {backgroundColor: '#623CEA'}]}>
              <Icon
                name="message-square"
                size={18}
                color="#fff"
                style={{padding: 5}}
              />

              <Text style={styles.btnText}>Message</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.info}>
            <Text style={(styles.text, {fontSize: 32})}>
              Medicine Specialist
            </Text>
            <Text style={[styles.text, styles.subText, {fontSize: 18}]}>
              Good Health Clinic , MBBS, FCPS
            </Text>
            <Text style={[styles.text, {paddingTop: 10}]}>About Rajesh</Text>
            <Text style={[styles.text, styles.subText, {fontSize: 18}]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              dignissim vestibulum rutrum. Suspendisse eget diam sagittis,
              faucibus ligula
            </Text>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statsBox}>
              <Text style={[styles.text, styles.subText, {fontSize: 24}]}>
                Patients
              </Text>
              <Text style={[styles.text]}>1.08K</Text>
            </View>
            <View
              style={[
                styles.statsBox,
                {
                  borderColor: '#DFD8C8',
                  borderLeftWidth: 1,
                  borderRightWidth: 1,
                },
              ]}>
              <Text style={[styles.text, styles.subText, {fontSize: 24}]}>
                Experience
              </Text>
              <Text style={[styles.text]}>4 Years</Text>
            </View>
            <View style={styles.statsBox}>
              <Text style={[styles.text, styles.subText, {fontSize: 24}]}>
                Review
              </Text>
              <Text style={[styles.text]}>2.05K</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.submit, {backgroundColor: '#277BEC'}]}>
            <Icon name="phone" size={18} color="#fff" style={{padding: 5}} />
            <Text style={styles.btnSubmitText}>Book Appointment</Text>
          </TouchableOpacity>
          <View style={styles.more}>
            <Text style={[styles.text, {paddingTop: 10}]}>
              Related Searches
            </Text>
            <AvailableDoctors data={Doctors} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    fontFamily: 'Nunito-Bold',
    color: '#52575D',
    fontSize: 24,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: 0.9,
    alignSelf: 'center',
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  btnStyle: {
    width: 120,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#FFF',
    fontWeight: '500',
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    fontWeight: '500',
    fontFamily: 'Nunito-Regular',
  },

  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  info: {
    margin: 30,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
  submit: {
    flex: 1,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 30,
  },
  btnSubmitText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 24,
    color: '#FFF',
    fontWeight: '500',
  },
  more: {
    marginLeft: 30,
    marginRight: 30,
  },
});
