import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { Header } from '../components/common'
import LibraryList from '../components/LibraryList'

const TechStackScreen = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <View>
        <Header title='Tech Stack' />
        <LibraryList />
      </View>
    </Provider>
  )
}

export default TechStackScreen;