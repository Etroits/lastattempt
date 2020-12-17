import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Ap from './Ap'
const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Button mode="outlined" onPress={() => navigation.navigate('JoinScreen')}>Get in</Button>
    
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
      Logout
    </Button>
  </Background>
);

export default memo(Dashboard);
