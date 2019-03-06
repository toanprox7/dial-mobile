import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import { Button} from "react-native-elements";

import { phoneService } from "../../providers/PhoneProvider/PhoneProvider";

export class DisconnectForm extends React.Component {
  static propTypes = {
    phoneService: PropTypes.object.isRequired
  };

  /**
   * Register the user in the Telephony Backend
   */
  disconnectUserAction = () => {
    // const { phoneNumber } = this.state;
    const { phoneService } = this.props;
    console.log(`Disconnecting user`);
    phoneService.disconnectUser();
  };

  /**
   * Render the component
   * @returns {*}
   */
  render() {
    this.props.phoneService.testFunction();
    return (
      <View>
        <Button
          onPress={this.disconnectUserAction}
          title="Disconnect"
          type="clear"
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonTitle: {
    color: "#FF0000"
  }
});

export default phoneService(DisconnectForm);