import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, CardSection, Button, Input } from './common'

class LoginForm extends Component {
  state = {email: '', password: ''};

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
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;
