import React from 'react';
import { View } from 'react-native';
import { AppRoutes } from './src/routes/appRoutes';

const axios = require('axios');

axios.get('https://api.github.com/users/isaias-primieri-develcode')

export default function App() {
  return (

    <View style={{ height: '100%', width: '100%' }}>

      <AppRoutes />
    </View>

  );
}
