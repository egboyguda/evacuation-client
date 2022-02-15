import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Context as ApiContext } from '../context/apiContext';
const InitialScreen = ({ navigation }) => {
  const { getData, state } = useContext(ApiContext);
  useEffect(async () => {
    await getData();
    navigation.navigate('Main');
  }, []);

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
};

export default InitialScreen;
