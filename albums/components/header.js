import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={stylesheet.viewStyle}>
      <Text style={stylesheet.textStyle}>{props.title}</Text>
    </View>
  );
}

const stylesheet = {
  viewStyle: {
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 30,
    color: 'red'
  }
}

export default Header;