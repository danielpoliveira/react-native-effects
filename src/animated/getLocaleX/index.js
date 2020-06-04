import React          from 'react';
import { View, Text, Animated } from 'react-native';
import { PanGestureHandler, PinchGestureHandler,TapGestureHandler, TouchableOpacity} from 'react-native-gesture-handler';

export default () => {
  return (
    <View style={{flex:1, backgroundColor: "red"}} >
    
    <PanGestureHandler minDist={0}  onGestureEvent={e => console.log(e.nativeEvent)}>
      <Animated.View style={{width: 300, height: 200, backgroundColor: "blue"}}  onTouchEnd ={e => console.log(e.nativeEvent)} />
    </PanGestureHandler>

    </View>
  )
}