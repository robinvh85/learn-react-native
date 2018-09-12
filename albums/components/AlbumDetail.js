import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from './common'
// import Card from './common/Card'
// import CardSection from './common/CardSection'
// import Button from './common/Button'

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <View style={ styles.thumbnailContainerStyle }>
          <Image style={styles.thumbnailStyle} source={{ uri: props.album.thumbnail_image }} />
        </View>
        <View style={styles.headerContainerStyle}>
          <Text>{ props.album.title }</Text>
          <Text>{ props.album.artist }</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={ styles.imageStyle } source={{ uri: props.album.image }} />
      </CardSection>
      <CardSection>
        <Button onPress={ () => Linking.openURL(props.album.url) }>
          Click me !
        </Button>
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
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    height: 150,
    flex: 1,
    // width: null
  }
}

export default AlbumDetail;
