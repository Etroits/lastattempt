import React, { memo } from 'react';
import Background from '../Background';
import Logo from '../Logo';
import Header from '../Header';
import Button from '../Buttons';
import Paragraph from '../Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    
    <Header>Home Screen</Header>

    <Paragraph>
      Login or sign up to start using this trivia game.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
