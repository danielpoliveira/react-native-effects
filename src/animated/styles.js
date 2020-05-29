import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },

  circle: {
      width: 150,
      height: 150,
      backgroundColor: "#c00000",
      borderRadius: 100,
  },

  square: {
    width: 150,
    
    backgroundColor: "blue",
  },

  view: {
    width: '100%',
    backgroundColor: "gray",
  }


});