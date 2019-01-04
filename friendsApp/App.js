import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendReducer from './FriendReducer';
import AppContainer from './Navigation';

const store = createStore(friendReducer);

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
          'Allie',
          'Gator',
          'Lizzie',
        ],
        currentFriends: [],
    }
  }

  addFriend = (index) => {
    const {
        currentFriends,
        possibleFriends,
      } = this.state

    const addedFriend = possibleFriends.splice(index, 1)

    currentFriends.push(addedFriend)

    this.setState({
      currentFriends,
      possibleFriends,
    })
  }

  render() {
    return (
      <Provider store={ store }>
        <AppContainer
          screenProps={ {
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            addFriend: this.addFriend,
          }}
        />
      </Provider>
    );
  }
}
