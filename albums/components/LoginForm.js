import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common'
import firebase from 'firebase';

class LoginForm extends Component {
  state = {email: '', password: '', error: '', loading: false};

  onButtonPress(){
    // debugger;
    const { email, password } = this.state;

    this.setState({ loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch( () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess(){
    this.setState({
      loading: false,
      email: '',
      password: '',
      error: ''
    });
  }

  onLoginFail(){
    this.setState({ error: 'Authentication failed', loading: false });
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner size='small' />
    }

    return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder='user@gmail.com'
            label='Email'
            value={ this.state.email }
            onChangeText={ text => this.setState({ email: text }) }
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder='password'
            label='Password'
            value={ this.state.password }
            onChangeText={ text => this.setState({ password: text }) }
          />
        </CardSection>
        <Text style={ styles.errorStyle }>
          { this.state.error }
        </Text>
        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alighSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;
