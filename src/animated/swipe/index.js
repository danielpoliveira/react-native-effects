import React               from 'react';
import {View, Animated}    from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import styles from '../styles';

export default () => {
  let offset = 0;
  let opened = true;

  const Height     = new Animated.Value(200);
  const TranslateY = new Animated.Value(0);

  const handleGesture = Animated.event([{
    nativeEvent: {
      translationY: TranslateY,
    }
  }], { 
    useNativeDriver: true ,
    listener: e => swipeView(e)
    
  });

  const swipeView = e => {
    const { translationY } = e.nativeEvent;
      
    offset = Height._value;
    
    console.log(translationY)

    if(offset + translationY >= 55 && offset + translationY <= 200){
       Height.setValue(offset + e.nativeEvent.translationY)
    }

    /*if(translationY >= 100){
      opened = false;
    }else{
      Height.setValue(offset + translationY);
      Height.setOffset(0);
    }*/

    /*Animated.timing(Height, {
      toValue: !opened ? 200: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      Height.setValue(offset);
      Height.setOffset(200);
    });*/
  }
  
  return ( 
    <View style={styles.container}>
      
      <Animated.View  style={[styles.square, {
        position:"absolute",
        top: 0,
       height: Height,
       


      }]} />
      
      
      <PanGestureHandler   onGestureEvent={handleGesture} >
        <Animated.View style={[styles.circle, {
          height: 200,
          backgroundColor: 'brown',
          transform: [
            // {
            //   translateX: TranslateX.interpolate({
            //     inputRange: [0, 200],
            //     outputRange: [0, 200],
            //     extrapolate: 'clamp',
            //   })
            // },
            {
              translateY: TranslateY.interpolate({
                inputRange: [0, 200],
                outputRange: [0, 200],
                extrapolate: 'clamp',
              })
            }
            
          ]
        }]} />
      </PanGestureHandler>

      
    
    </View>
    
  );
}