import React from 'react';
import {View, Text, Animated} from 'react-native';

import { PanGestureHandler  } from 'react-native-gesture-handler';

import styles from '../styles';

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

