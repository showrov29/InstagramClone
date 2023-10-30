import React from 'react';

import {
  Appearance,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

function App() {
  const colorScheme = Appearance.setColorScheme('light');
  return (
    <View>
      <HomeScreen />
    </View>
  );
}

export default App;
