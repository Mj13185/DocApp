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
const {width, height} = Dimensions.get('window');

const Category = ({data}) => {
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
              <Animated.View style={styles.animatedView}>
                <TouchableWithoutFeedback /*onPress={handleCardClick(item.id)}*/
                >
                  <View style={styles.flatListView}>
                    <Image style={styles.image} source={item.img} />
                  </View>
                  <Text style={styles.itemTitle}> {item.title}</Text>
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
  image: {
    width: width / 6.25,
    height: width / 6.25,
    borderRadius: 100,
    opacity: 0.9,
  },

  itemTitle: {
    color: '#707C80',
    fontSize: width / 38,
    alignSelf: 'center',
    marginBottom: width / 100,
    fontFamily: 'Nunito-Bold',
    padding: width / 50,
    fontWeight: 'bold',
    elevation: 5,
  },
  animatedView: {
    width: width / 4.5,
    height: width / 4.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width / 100,
    elevation: 5,
  },
  flatListView: {
    width: width / 6.25,
    height: width / 6.25,
    elevation: 5,
  },
});

export default Category;
