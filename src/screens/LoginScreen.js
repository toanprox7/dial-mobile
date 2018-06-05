import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { AuthSession } from 'expo'
import {
  REACT_APP_OAUTH_CLIENT_ID,
  REACT_APP_OAUTH_AUTHORIZATION_URL
} from '../settings'

export default class LoginScreen extends React.Component {
  state = {
    result: null,
  }

  render () {
    return (
      <View style={styles.container}>
        <Button title="Open CERN Auth" onPress={this._handlePressAsync}/>
        {this.state.result ? (
          <Text>{JSON.stringify(this.state.result)}</Text>
        ) : null}
      </View>
    )
  }

  _handlePressAsync = async () => {
    let redirectUrl = AuthSession.getRedirectUrl()

    const authUrl = `${REACT_APP_OAUTH_AUTHORIZATION_URL}` +
      `?response_type=code` +
      `&client_id=${REACT_APP_OAUTH_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUrl)}`

    let result = await AuthSession.startAsync({
      authUrl: authUrl,
    })
    this.setState({result})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})