import React from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner } from '../components/common'
import firebase from 'firebase';
import LoginForm from '../components/LoginForm'

class AuthScreen extends React.Component {

  state = { loginIn: false };

  componentWillMount() {
    console.log("Auth will mount");
    firebase.initializeApp({
      apiKey: 'AIzaSyAoDjLFxDSR__1wxVjDxw6TxJFKGPm4KPQ',
      authDomain: 'auth-41f0b.firebaseapp.com',
      databaseURL: 'https://auth-41f0b.firebaseio.com',
      projectId: 'auth-41f0b',
      storageBucket: 'auth-41f0b.appspot.com',
      messagingSenderId: '424891201596'
    });

    firebase.auth().onAuthStateChanged( (user) => {
      if(user){
        this.setState({ loginIn: true });
      } else {
        this.setState({ loginIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loginIn){
      case true:
        return (
          <View style={{ height: 40 }}>
            <Button onPress={ () => firebase.auth().signOut() }>Logout</Button>
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size='large' />

    }
  }

  render(){
    return (
      <View style={ styles.container }>
        <Header title='Authentication' />
        { this.renderContent() }
      </View>
    );
  }
}

const styles = {
  container: {

  }
}

export default AuthScreen;