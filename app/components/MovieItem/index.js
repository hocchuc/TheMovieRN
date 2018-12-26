import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {IMAGE_URL, POSTER_SIZE} from '../../constant/Constants';

export default class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const image = IMAGE_URL + POSTER_SIZE +"/"+ this.props.item.poster_path;
    console.log(image)
    return (
        <TouchableOpacity onPress={this.onPress} >
        <View style = {style.container}>
            <Image source={{uri: image}} style={style.imageContainer}  />
            <View style = {[style.textContainer, 
                { backgroundColor: this.props.index % 2 == 0 ? '#f73378' : 'gray'} ]}>
                <Text style ={style.title}>{this.props.item.title}</Text>
                <Text style ={style.content} ellipsizeMode={'tail'} numberOfLines={10}>{this.props.item.overview}</Text>

            </View>
        </View>
    </TouchableOpacity>
    );
  }
}

const style = StyleSheet.create({
    imageContainer: {
        width: 100,
        height: 185
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
        marginLeft: 8,
        height: 185
    },
    title: {
        alignContent: 'flex-start',
        color: 'orange',
        fontSize: 16,
        backgroundColor:'yellow'
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
