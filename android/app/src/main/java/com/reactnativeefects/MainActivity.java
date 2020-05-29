package com.reactnativeefects;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;                           // + react-native-gesture-handler
import com.facebook.react.ReactRootView;                                   // + react-native-gesture-handler
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView; // + react-native-gesture-handler

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "reactNativeEfects";
  }

  @Override                                                             // + react-native-gesture-handler
  protected ReactActivityDelegate createReactActivityDelegate() {       // + react-native-gesture-handler
    return new ReactActivityDelegate(this, getMainComponentName()) {    // + react-native-gesture-handler
      @Override                                                         // + react-native-gesture-handler
      protected ReactRootView createRootView() {                        // + react-native-gesture-handler
       return new RNGestureHandlerEnabledRootView(MainActivity.this);   // + react-native-gesture-handler
      }                                                                 // + react-native-gesture-handler
    };                                                                  // + react-native-gesture-handler
  }                                                                     // + react-native-gesture-handler
}
