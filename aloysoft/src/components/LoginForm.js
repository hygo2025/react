import React, { Component } from 'react';
import { View, TextInput } from 'react-native'

import { Button, Card, Section, Input } from './common';


class LoginForm extends Component {
  state = {
    email: '',
    password: ''
  }

  componentWillUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <Card>
        <Section>
          <Input 
            label="Email"
            value={this.state.email} 
            onChangeText={email => this.setState({ email })} 
            placeholder="you@gmail.com"
          />
        </Section>
        <Section>
        <Input 
            placeholder="************"
            label="Password"
            value={this.state.password} 
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
          />
        </Section>
        <Section>
          <Button onClickPress={() => console.log('mamaeu')}> Login </Button>
        </Section>
      </Card>
    );
  }

}

export default LoginForm;