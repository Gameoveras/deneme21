import {View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ActivityIndicator, Image  } from 'react-native';
import React, { useEffect, useState,Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './router'; // Fonksiyonu içe aktarın


const App = () => {
    return (
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
    );
  };
  
  export default App;