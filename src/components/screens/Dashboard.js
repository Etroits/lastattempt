import React, { memo } from 'react';
import Background from '../Background';
import Logo from '../Logo';
import Header from '../Header';
import Paragraph from '../Paragraph';
import Button from '../Buttons';

const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Button mode="outlined" onPress={() => navigation.navigate('Aja')}>Get in</Button>
    
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
