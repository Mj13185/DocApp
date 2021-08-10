/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');
const DoctorsTab = ({data}) => {
  /*const handleCardClick = (id) => {
    ToastAndroid.show('Card View Clicked ' + id, ToastAndroid.LONG);
  };*/
  const scrollY = new Animated.Value(0);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
  }, [data, dataList]);

  if (data && data.length) {
    return (
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Animated.FlatList
          data={data}
          ref={(flatList) => {
            this.flatList = flatList;
          }}
          keyExtractor={(item, index) => 'key' + index}
          scrollEnabled
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={2}
          bounces={false}
          scrollEventThrottle={16}
          decelerationRate={0.9}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Animated.View>
                <TouchableWithoutFeedback /*onPress={handleCardClick(item.id)}*/
                >
                  <View style={styles.cardView}>
                    <Image style={styles.imageView} source={item.img} />
                    <View style={styles.textViewOne}>
                      <Text style={styles.textName}>{item.name}</Text>
                      <Text style={styles.textTwo}>{item.specialization}</Text>
                    </View>
                    <View style={styles.textViewTwo}>
                      <Text style={styles.textHeading}>Experience </Text>
                      <Text style={styles.text}>{item.experience}</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </Animated.View>
            );
          }}
          onScroll={Animated.event(
            // scrollX = e.nativeEvent.contentOffset.x
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            {useNativeDriver: true},
          )}
        />
      </View>
    );
  }

  console.log('Please provide data');
  return null;
};

const styles = StyleSheet.create({
  cardView: {
    width: width / 2.2,
    height: width / 3.5,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 15,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: width / 4.2,
    height: width / 4.2,
    position: 'absolute',
    right: width / 52,
    bottom: 0,
  },
  textViewTwo: {
    position: 'absolute',
    left: width / 50,
    bottom: width / 25,
    flex: 1,
    flexDirection: 'column',
  },
  textViewOne: {
    position: 'absolute',
    left: width / 50,
    top: width / 50,
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: width / 32,
    fontFamily: 'Nunito-Bold',
    color: '#555F61',
  },
  textName: {
    fontSize: width / 32,
    fontFamily: 'Nunito-Bold',
    color: '#555F61',
  },
  textTwo: {
    fontSize: width / 34,
    fontFamily: 'Nunito-SemiBold',
    color: '#707C80',
  },
  textHeading: {
    fontSize: width / 32,
    fontFamily: 'Nunito-Regular',
    color: '#707C80',
  },
});

export default DoctorsTab;
