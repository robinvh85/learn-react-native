import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/common';
import AlbumList from '../components/AlbumList';

const AlbumScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header title='Album' />
      <AlbumList />
    </View>
  );
}

const styles = {
  container: {
    flex: 1
  }
}

export default AlbumScreen;