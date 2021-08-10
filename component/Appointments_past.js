import React, {Component} from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';

export default class Appointments_past extends Component {
  render() {
    return (
      <View style={styles.cardView}>
        <View style={styles.rowViewOne}>
          <View style={styles.coloumnView}>
            <Text style={styles.textheadig}>Date</Text>
            <Text style={styles.textData}>20 Dec</Text>
          </View>
          <View style={styles.coloumnView}>
            <Text style={styles.textheadig}>Time</Text>
            <Text style={styles.textData}>05:15 PM</Text>
          </View>
          <View style={styles.coloumnView}>
            <Text style={styles.textheadig}>Doctor</Text>
            <Text style={styles.textData}>Mj</Text>
          </View>
        </View>
        <View style={styles.rowViewTwo}>
          <View style={styles.coloumnView}>
            <Text style={styles.textheadig}>Appointment Type</Text>
            <Text style={styles.textData}>Dentist</Text>
          </View>
          <View style={styles.coloumnView}>
            <Text style={styles.textheadig}>Place</Text>
            <Text style={styles.textData}>Gurgaon</Text>
          </View>
          <View style={styles.coloumnView}>
            <Button
              title="Cancel"
              color="#277bec"
              onPress={() => Alert.alert('Simple Button pressed')}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cardView: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 10,
  },
  rowViewOne: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    justifyContent: 'space-between',
    alignContent: 'flex-start',
  },
  rowViewTwo: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: '#ECECEC',
    flexDirection: 'row',
  },
  textheadig: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#949494',
  },
  textData: {
    fontSize: 16,
    fontFamily: 'Nunito-Bold',
    color: '#3F3F3F',
  },
  coloumnView: {
    padding: 15,
  },
});
