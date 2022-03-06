import React, { useContext, useEffect } from 'react';
import { View, ActivityIndicator ,StyleSheet} from 'react-native';

import { Context as ApiContext } from '../context/apiContext';
const InitialScreen = ({ navigation }) => {
  const { getData, state } = useContext(ApiContext);
  useEffect(async () => {
    await getData();
    navigation.navigate('Main');
  }, []);

  return (
    <View style={styles.container}>
    <ActivityIndicator/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
export default InitialScreen;
