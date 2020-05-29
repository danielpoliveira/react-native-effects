import React                  from 'react';
import {View,Text,  Animated}       from 'react-native';
import { PanGestureHandler , PinchGestureHandler } from 'react-native-gesture-handler';

import styles from '../styles';

export default () => {
  const TranslateX = new Animated.Value(0);
  const TranslateY = new Animated.Value(0);
  const Scale = new Animated.Value(1);

  const handleGesture = Animated.event([{
    nativeEvent: {
      scale: Scale,
    }
  }], { useNativeDriver: true });
  
  const onGestureStateChange = e => {
    Scale.setValue(e.nativeEvent.scale)
  }

  return (
    <View style={styles.container}>
      <PinchGestureHandler
        onGestureEvent={handleGesture} 
        onHandlerStateChange={onGestureStateChange}
      >
        <Animated.View style={[styles.circle, {
          transform: [
            { perspective: 200    },
            { scale: Scale }
          ]
        }]} />
      </PinchGestureHandler>
      
      </View>
  )
}
