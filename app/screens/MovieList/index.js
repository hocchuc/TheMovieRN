import React, { Component } from 'react';
import { View, FlatList, Image} from 'react-native';
import {URL} from '../../constant/Constants';
import MovieItem from '../../components/MovieItem';
import {styles} from './style';

export class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
     // isLoading = true
    };
  }
  
  callBackFromItem = (index, item) => {
    console.log("callback from item")
    console.log(index)
    console.log(item)
    this.props.navigation.navigate('Detail',{
      item 
    })
  }

  async componentDidMount() {    
      console.log("1")
    return fetch(URL)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(JSON.stringify(responseJson)) //just for testing
        this.setState({
            isLoading  : false,
            dataSource : responseJson.results,
        }, function(){
        })
    })
    .catch((error) => {
        console.log("error")
        console.error(error);
    })
}
  
  render() {
    const {navigate} = this.props.navigation;
      return (
        <View style={styles.container}>
        <FlatList
          data= {this.state.dataSource}
          renderItem={({item, index}) =>
           <MovieItem
           item = {item}
           index = {index}
           onPress={this.callBackFromItem}/>
          }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  } 
}