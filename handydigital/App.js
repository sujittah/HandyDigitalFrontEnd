/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {API,Amplify} from 'aws-amplify';
import config from './aws-exports';
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
  Header,
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
    fetch('https://mzxrlklrke.execute-api.ap-south-1.amazonaws.com/dev/getProducts')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          renderItem={({item}) =>
          <Text onPress={this.getListViewItem.bind(this, item)}>{item.productname}</Text>}
                ItemSeparatorComponent={this.renderSeparator}
          />
      )}
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


