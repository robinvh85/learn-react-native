import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import { Header } from '../components/common'

const TechStackScreen = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <Header title='Tech Stack' />
    </Provider>
  )
}

export default TechStackScreen;