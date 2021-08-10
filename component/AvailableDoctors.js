import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet, Image, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const AvailableDoctors = ({data}) => {
  /*const handleCardClick = (id) => {
    ToastAndroid.show('Card View Clicked ' + id, ToastAndroid.LONG);
  };*/
  const scrollX = new Animated.Value(0);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
  }, [data, dataList]);

  if (data && data.length) {
    return (
      <View>
        <Animated.FlatList
          data={data}
          ref={(flatList) => {
            this.flatList = flatList;
          }}
          keyExtractor={(item, index) => 'key' + index}
          horizontal
          scrollEnabled
          bounces={false}
          scrollEventThrottle={16}
          decelerationRate={0.9}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Animated.View style={styles.cardView}>
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
                    x: scrollX,
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
    width: 300,
    height: 150,
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 15,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: 120,
    height: 140,
    position: 'absolute',
    right: 10,
    bottom: 0,
  },
  textViewTwo: {
    position: 'absolute',
    left: 10,
    bottom: 30,
    flex: 1,
    flexDirection: 'column',
  },
  textViewOne: {
    position: 'absolute',
    left: 10,
    top: 10,
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 22,
    fontFamily: 'Nunito-Bold',
    color: '#555F61',
  },
  textName: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    color: '#555F61',
  },
  textTwo: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: '#707C80',
  },
  textHeading: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    color: '#707C80',
  },
});

export default AvailableDoctors;
