import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux'

class Contacts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>You have { this.props.friends.current.length } friends.</Text>
        <Button
          title="Make some friends!"
          onPress={()=> this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  const { friends } = state
  return { friends }
};

export default connect(mapStateToProps)(Contacts);
