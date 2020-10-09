/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {API,Amplify} from 'aws-amplify';
import config from './aws-exports';
import { Header } from 'react-native-elements';
Amplify.configure(config);
import { withAuthenticator } from 'aws-amplify-react-native'
import React, {Component,useEffect,useState } from 'react';
import {
AppRegistry,
   FlatList,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
TextInput,
  StatusBar,
  Alert


} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

 renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    };
    //handling onPress action
    getListViewItem = (item) => {
        Alert.alert(item);
    }

  useEffect(() => {
    fetch('https://mzxrlklrke.execute-api.ap-south-1.amazonaws.com/dev/getProducts',{
       method: 'GET',
       headers: {
             'x-api-key': 'NqwoT8A2aH62NCMmpoeMd9r1ERhSm1oO5KTxjeGx'
       }
       })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
       <Header
         leftComponent={{ icon: 'menu', color: '#fff' }}
         centerComponent={{ text: 'Handy Digital', style: { color: '#fff' } }}
         rightComponent={{ icon: 'home', color: '#fff' }}
       />
       <View style={{flex: 2, backgroundColor: 'skyblue'}} >
          {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) =>
          <Text onPress={this.getListViewItem.bind(this, item)}>{item.productname}</Text>}
                ItemSeparatorComponent={this.renderSeparator}
          />
      )}
       </View>
    </View>
  );
  const styles = StyleSheet.create({
      container: {
          flex: 1,
      },
      item: {
          padding: 10,
          fontSize: 18,
          height: 44,
      },
  })
};


