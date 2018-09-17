import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView, Text } from 'react-native';
import LibraryItem from './LibraryItem';

class LibraryList extends Component {
  
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    console.log("AAAAAA", this.props);
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }
  
  renderRow(library) {
    return <LibraryItem library={library} />
  }

  render() {
    return (
      <ListView 
        dataSource={this.dataSource} 
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);
