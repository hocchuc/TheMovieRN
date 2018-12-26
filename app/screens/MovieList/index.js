import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import {URL} from '../../constant/Constants'

export class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {    
      console.log("1")
    return fetch(URL)
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(JSON.stringify(responseJson))
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
          renderItem={({item}) => <Text>{item.title}, {item.overview}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }

  
}

async function callMoviesAPI() {
    // console.log(URL)
    // try {
    //     const response = await fetch(URL);
    //     const responseJson = await response.json();  
    //     this.setState({
    //         dataList: responseJson.results,
    //     });
    //   } catch (error) {
    //     console.error(error);
    // }
  }

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  })
  
  