/* eslint-disable */
import React from "react";
import { View, Platform, StatusBar, SafeAreaView } from "react-native";
import { SafeAreaView as ReactNavigationSafeAreaView } from "react-navigation";
import _ from "lodash";
// eslint
const AndroidSafeAreaView = props => {
  const { pointerEvents = "auto" } = props;
  return Platform.select({
    ios: () => {
      if (props.useReactNavigationSafeAreaView) {
        return (
          <ReactNavigationSafeAreaView
            pointerEvents={pointerEvents}
            style={[{ flex: 1 }, props.style]}
            forceInset={props.forceInset}
          >
            {props.children}
          </ReactNavigationSafeAreaView>
        );
      }
      return (
        <SafeAreaView
          pointerEvents={pointerEvents}
          style={[{ flex: 1 }, props.style]}
          forceInset={props.forceInset}
        >
          {props.children}
        </SafeAreaView>
      );
    },
    android: () => {
      if (_.get(props, "style.flex") === 0) {
        return (
          <SafeAreaView pointerEvents={pointerEvents} style={props.style} />
        );
      }
      return (
        <View
          pointerEvents={pointerEvents}
          style={[
            { flex: 1, paddingTop: props.modal ? 0 : StatusBar.currentHeight },
            props.style
          ]}
        >
          {props.children}
        </View>
      );
    }
  })();
};

export default AndroidSafeAreaView;
