import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card'
import CardSection from './CardSection'

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View>
          <Image style={styles.thumbnailStyle} source={{ uri: props.album.thumbnail_image }} />
        </View>
        <View style={styles.headerContainerStyle}>
          <Text>{ props.album.title }</Text>
          <Text>{ props.album.artist }</Text>
        </View>
      </CardSection>
    </Card>
  )
};

const styles = {
  headerContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
}

export default AlbumDetail;
