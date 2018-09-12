import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '../components/common'
import firebase from 'firebase';
import LoginForm from '../components/LoginForm'

class AuthScreen extends React.Component {

  componentWillMount() {
    console.log("Auth will mount");
    firebase.initializeApp({
      apiKey: 'AIzaSyAoDjLFxDSR__1wxVjDxw6TxJFKGPm4KPQ',
      authDomain: 'auth-41f0b.firebaseapp.com',
      databaseURL: 'https://auth-41f0b.firebaseio.com',
      projectId: 'auth-41f0b',
      storageBucket: 'auth-41f0b.appspot.com',
      messagingSenderId: '424891201596'
    })
  }

  render(){
    return (
      <View>
        <Header title='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

const styles = {

}

export default AuthScreen;