import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { IMAGE_URL, POSTER_SIZE_MEDIUM_RES } from '../../constant/Constants';

export class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    //this.props.navigation.getParam('item')
    console.log('--MovieDetail--')
    console.log(props)
  }

  render() {
    const { navigate } = this.props.navigation;
    const item = this.props.navigation.getParam('item', {})
    const image = IMAGE_URL + POSTER_SIZE_MEDIUM_RES + "/" + item.poster_path;
    console.log(item)
    return (
      <View>
        <ImageBackground source={{ uri: image }} style={style.imageContainer} >
          <Text style={style.title}>{item.title}</Text>
        </ImageBackground>
        <Text style={style.content}>{item.overview} </Text>
      </View>
    );
  }
}
const style = StyleSheet.create({
  imageContainer: {
    justifyContent: 'flex-end',
    marginBottom: 36,
    width: 400,
    height: 200,
    backgroundColor: 'blue',
    marginRight: 8
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    height: 185,
  },
  title: {
    alignSelf: 'baseline',
    fontSize: 16,
    paddingLeft: 16,
    color: 'white',
    backgroundColor: 'black'
  },
  content: {
    color: 'black',
    padding: 18,
    justifyContent: 'space-between',
  }
})
