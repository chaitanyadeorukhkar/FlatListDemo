/**
 * Sample x Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  VirtualizedList,
  SafeAreaView
} from "react-native";
import * as R from "ramda";
import Button from "./Button";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

type State = {
  data: Array<Object>
};

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [
        { key: "0", value: "0" },
        { key: "1", value: "1" },
        { key: "2", value: "2" },
        { key: "3", value: "3" },
        { key: "4", value: "4" },
        { key: "5", value: "5" },
        { key: "6", value: "6" },
        { key: "7", value: "7" },
        { key: "8", value: "8" },
        { key: "9", value: "9" },
        { key: "10", value: "10" },
        { key: "11", value: "11" },
        { key: "12", value: "12" },
        { key: "13", value: "13" },
        { key: "14", value: "14" },
        { key: "15", value: "15" },
        { key: "16", value: "16" },
        { key: "17", value: "17" },
        { key: "18", value: "18" },
        { key: "19", value: "19" },
        { key: "20", value: "20" }
      ]
    };
  }

  // componentDidMount = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       data: [
  //         { key: "21", value: 21 },
  //         { key: "22", value: 22 },
  //         { key: "23", value: 23 },
  //         { key: "24", value: 24 },
  //         { key: "0", value: 0 },
  //         { key: "1", value: 1 },
  //         { key: "2", value: 2 },
  //         { key: "3", value: 3 },
  //         { key: "4", value: 4 },
  //         { key: "5", value: 5 },
  //         { key: "6", value: 6 },
  //         { key: "7", value: 7 },
  //         { key: "8", value: 8 },
  //         { key: "9", value: 9 },
  //         { key: "10", value: 10 },
  //         { key: "11", value: 11 },
  //         { key: "12", value: 12 },
  //         { key: "13", value: 13 },
  //         { key: "14", value: 14 },
  //         { key: "15", value: 15 },
  //         { key: "16", value: 16 },
  //         { key: "17", value: 17 },
  //         { key: "18", value: 18 },
  //         { key: "19", value: 19 },
  //         { key: "20", value: 20 }
  //       ]
  //     });
  //   }, 5000);
  // };

  handleChange = () => {
    console.log("changed", this.refs);
    // this.refs._list.scrollToIndex({
    //   animated: false,
    //   index: R.findIndex(x => x === 13, this.state.data)
    // });
  };

  addToTop = () => {
    this.setState({
      data: [
        { key: "21", value: 21 },
        { key: "22", value: 22 },
        { key: "23", value: 23 },
        { key: "24", value: 24 },
        { key: "0", value: 0 },
        { key: "1", value: 1 },
        { key: "2", value: 2 },
        { key: "3", value: 3 },
        { key: "4", value: 4 },
        { key: "5", value: 5 },
        { key: "6", value: 6 },
        { key: "7", value: 7 },
        { key: "8", value: 8 },
        { key: "9", value: 9 },
        { key: "10", value: 10 },
        { key: "11", value: 11 },
        { key: "12", value: 12 },
        { key: "13", value: 13 },
        { key: "14", value: 14 },
        { key: "15", value: 15 },
        { key: "16", value: 16 },
        { key: "17", value: 17 },
        { key: "18", value: 18 },
        { key: "19", value: 19 },
        { key: "20", value: 20 }
      ]
    });
  };

  addToBottom = () => {
    this.setState({
      data: [
        { key: "0", value: 0 },
        { key: "1", value: 1 },
        { key: "2", value: 2 },
        { key: "3", value: 3 },
        { key: "4", value: 4 },
        { key: "5", value: 5 },
        { key: "6", value: 6 },
        { key: "7", value: 7 },
        { key: "8", value: 8 },
        { key: "9", value: 9 },
        { key: "10", value: 10 },
        { key: "11", value: 11 },
        { key: "12", value: 12 },
        { key: "13", value: 13 },
        { key: "14", value: 14 },
        { key: "15", value: 15 },
        { key: "16", value: 16 },
        { key: "17", value: 17 },
        { key: "18", value: 18 },
        { key: "19", value: 19 },
        { key: "20", value: 20 },
        { key: "21", value: 21 },
        { key: "22", value: 22 },
        { key: "23", value: 23 },
        { key: "24", value: 24 }
      ]
    });
  };

  renderItem = (row: Object) => {
    return (
      <Text style={{ fontSize: 20, textAlign: "center", height: 50 }}>
        (index: {row.index}) data: {row.item.value}
      </Text>
    );
  };

  render() {
    // const initialIndex = R.findIndex(x => x == 13, this.state.data);
    // console.log("IndexOf13", initialIndex);
    return (
      <SafeAreaView style={styles.container}>
        <VirtualizedList
          data={this.state.data}
          renderItem={this.renderItem}
          ref={"_list"}
          contentContainerStyle={{ width: "100%", backgroundColor: "white" }}
          style={{ width: "100%", backgroundColor: "white" }}
          getItem={(data, index) => data[index]}
          getItemCount={data => data.length}
          // onContentSizeChange={this.handleChange}
          // initialScrollIndex={initialIndex}
          // getItemLayout={(data, index) => ({
          //   length: 50,
          //   offset: 50 * index,
          //   index
          // })}
        />
        <Button addToTop={this.addToTop} addToBottom={this.addToBottom} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
