import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AndroidSafeAreaView from "../components/android/AndroidSafeAreaView";
import { ShakeEventExpo } from "../components/ShakeEventExpo";
import ShakeModal from "../components/ShakeModal";

interface PropsInterface {
  navigation: any;
}

interface StateInterface {
  shake: boolean;
}

class Shake extends React.Component<PropsInterface, StateInterface> {
  public constructor(props: PropsInterface) {
    super(props);
    this.state = {
      shake: false
    };
  }

  public componentDidMount = () => {
    ShakeEventExpo.addListener(() => {
      //add your code here
      this.props.navigation.navigate("FoodSelection");
      console.log("Shake Shake Shake");
    });
  };

  componentWillUnmount() {
    ShakeEventExpo.removeListener();
  }

  public render(): React.ReactNode {
    return (
      <AndroidSafeAreaView>
        <View style={styles.container}>
          <Text>WHAT TO EAT?</Text>
          <Image
            style={styles.shake}
            resizeMode={"contain"}
            source={require("../assets/shake.png")}
          />
          <Text>SHAKE TO FIND OUT</Text>
        </View>
        {/* <ShakeModal
          isVisible={this.state.shake}
          onClose={() => {
            this.setState({ shake: false });
          }}
        /> */}
      </AndroidSafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  shake: {
    width: "100%",
    height: "100%"
  }
});

export default Shake;
