import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Your new best friend is waiting for you!</Text>
        {
            this.props.friends.possible.map((friend, index) => (
              <Button
                key={ friend }
                title={`Add ${ friend }`}
                onPress={() =>
                  this.props.screenProps.addFriend(index)
                }
              />
            )
          )
        }
        <Button
          title="See all your friends!"
          onPress={()=> this.props.navigation.navigate('Contacts')}
        />
      </View>
    );
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

export default connect(mapStateToProps)(Home);
