/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AlbumScreen from './screens/AlbumScreen';
import AuthScreen from './screens/AuthScreen';
import TechStackScreen from './screens/TechStackScreen';

// import Header from './components/header';
// import AlbumList from './components/AlbumList';

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header title='Album' />
//         <AlbumList />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   }
// });

const App = createStackNavigator({
  TechStack: TechStackScreen,
  Auth: AuthScreen,
  Album: AlbumScreen,
});

export default App;