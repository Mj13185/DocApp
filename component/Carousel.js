import React, {useState, useEffect} from 'react';
import {
  View,
  Animated,
  Dimensions,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const Carousel = ({data}) => {
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
          pagingEnabled
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
                  <Image style={styles.image} source={item.bgImg} />
                  <Image style={styles.imageV} source={item.img} />
                  <View style={styles.textView}>
                    <Text style={styles.itemTitle}> {item.title}</Text>
                    <Text style={styles.itemDescription}>
                      {item.description}
                    </Text>
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
    flex: 1,
    width: width - 40,
    height: height / 5,
    backgroundColor: 'white',
    margin: 20,
    alignContent: 'center',

    borderRadius: 10,
    shadowColor: '#000',

    elevation: 5,
  },

  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width - 40,
    height: height / 5,
    borderRadius: 10,
    opacity: 0.9,
  },
  imageV: {
    width: 150,
    height: '100%',
    marginTop: 10,
    position: 'absolute',
    right: 5,
  },
  itemTitle: {
    color: 'white',
    fontSize: width / 20,
    shadowColor: '#000',

    marginBottom: 5,
    fontFamily: 'Nunito-Bold',

    fontWeight: 'bold',
    elevation: 5,
  },
  itemDescription: {
    color: 'white',
    fontSize: width / 32,
    shadowColor: '#000',

    elevation: 5,
    fontFamily: 'Nunito-Light',
    padding: 5,
  },
});

export default Carousel;
