import React from 'react';
import { View } from 'react-native';
import { Routes } from './src/routes';

const axios = require('axios');

axios.get('https://api.github.com/users/isaias-primieri-develcode')

export default function App() {
  return (

    <View style={{ height: '100%', width: '100%' }}>

      <Routes />
    </View>

  );
}
