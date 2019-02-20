// @flow

import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

type Props = {};

export default class Button extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{ height: 50, flexDirection: "row", width: "100%" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "#c5e1a5",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={this.props.addToTop}
        >
          <Text>{"Add data from top"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#8c9eff",
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={this.props.addToBottom}
        >
          <Text>{"Add data from bottom"}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
