import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

import { PanGestureHandler  } from 'react-native-gesture-handler';

export default () => {

  const TranslateX = new Animated.Value(0);
  const TranslateY = new Animated.Value(0);

  const handleGesture = Animated.event([{
    nativeEvent: {
      translationX: TranslateX,
      translationY: TranslateY
    }
  }], { useNativeDriver: true });

  return (

    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={handleGesture}>
        <Animated.View style={[styles.circle, {
          transform: [
            {translateX: TranslateX},
            {translateY: TranslateY}
            
          ]
        }]} />
      </PanGestureHandler>
      
    </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#fff"
  },

  circle: {
      width: 150,
      height: 150,
      backgroundColor: "#c00000",
      borderRadius: 100
    },

 })