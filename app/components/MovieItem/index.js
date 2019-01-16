import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {IMAGE_URL, POSTER_SIZE_MEDIUM_RES} from '../../constant/Constants';

export default class MovieItem extends Component {
  constructor(props) {
    super(props);
  }
  _onPress = () => {
      console.log(this.props)
      console.log("onClick inside item")
      this.props.onPress()
    // your code on item press
 };

  render() {
    const image = IMAGE_URL + POSTER_SIZE_MEDIUM_RES +"/"+ this.props.item.poster_path;

    //console.log(image)
    return (
        <TouchableOpacity onPress={this._onPress}>
        <View style = {style.container}>
            <Image source={{uri: image}} style={style.imageContainer}  />
            <View style = {[style.textContainer]}>
                <Text style ={style.title}>{this.props.item.title}</Text>
                <Text style ={style.content} 
                      ellipsizeMode={'tail'} 
                      numberOfLines={10}>
                      {this.props.item.overview}</Text>
            </View>
        </View>
    </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
    imageContainer: {
        width: 100,
        height: 185,
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
        backgroundColor:'black', 
        height: 185,
    },
    title: {
        alignContent: 'flex-start',
        fontSize: 16,
        paddingLeft: 16,
        color: 'white'
    },
    content: {
        flex: 1,
        flexWrap: 'wrap',
        color: 'white',
        backgroundColor:'blue',
        padding: 15,
        justifyContent: 'space-between',
    }
})
