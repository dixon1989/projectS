import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  Dimensions,
  Modal
} from "react-native";
import { Feather } from "@expo/vector-icons";
import CardStack, { Card } from "react-native-card-stack-swiper";

interface Props {
  memeURL: string;
  shareText: string;
  isVisible: boolean;
  onClose: () => void;
  offerNavigation: any;
}

export default class ShakeModal extends React.Component<Props> {
  private swiper: any;
  public state = {
    contentPositionY: new Animated.Value(Dimensions.get("window").height)
  };

  public componentDidMount = () => {
    //if (!this.props.isVisible && nextProps.isVisible) {
    this.slideAllUp();
    // } else if (this.props.isVisible && !nextProps.isVisible) {
    //  this.slideAllDown();
    // }
  };

  private slideAllUp = () => {
    Animated.timing(this.state.contentPositionY, {
      toValue: 0,
      duration: 500
    }).start();
  };

  private slideAllDown = () => {
    Animated.timing(this.state.contentPositionY, {
      toValue: Dimensions.get("window").height,
      duration: 250
    }).start();
  };

  private closeModal = () => {
    this.props.onClose();
  };

  public render = () => {
    return (
      <>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.isVisible}
        >
          <View style={[styles.container]}>
            <Animated.View
              style={[
                styles.animatedView,
                { top: this.state.contentPositionY }
              ]}
            >
              <View style={{ flex: 1 }}>
                <CardStack
                  style={styles.content}
                  renderNoMoreCards={() => (
                    <Text
                      style={{ fontWeight: "700", fontSize: 18, color: "gray" }}
                    >
                      No more cards :(
                    </Text>
                  )}
                  ref={swiper => {
                    this.swiper = swiper;
                  }}
                  onSwiped={() => console.log("onSwiped")}
                  onSwipedLeft={() => console.log("onSwipedLeft")}
                >
                  <Card style={[styles.card, styles.card1]}>
                    <Text style={styles.label}>A</Text>
                  </Card>
                  <Card
                    style={[styles.card, styles.card2]}
                    onSwipedLeft={() => alert("onSwipedLeft")}
                  >
                    <Text style={styles.label}>B</Text>
                  </Card>
                  <Card style={[styles.card, styles.card1]}>
                    <Text style={styles.label}>C</Text>
                  </Card>
                  <Card style={[styles.card, styles.card2]}>
                    <Text style={styles.label}>D</Text>
                  </Card>
                  <Card style={[styles.card, styles.card1]}>
                    <Text style={styles.label}>E</Text>
                  </Card>
                </CardStack>

                <View style={styles.footer}>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity
                      style={[styles.button, styles.red]}
                      onPress={() => {
                        this.swiper.swipeLeft();
                      }}
                    >
                      <Image
                        source={require("../assets/red.png")}
                        resizeMode={"contain"}
                        style={{ height: 62, width: 62 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, styles.orange]}
                      onPress={() => {
                        this.swiper.goBackFromLeft();
                      }}
                    >
                      <Image
                        source={require("../assets/back.png")}
                        resizeMode={"contain"}
                        style={{ height: 32, width: 32, borderRadius: 5 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={[styles.button, styles.green]}
                      onPress={() => {
                        this.swiper.swipeRight();
                      }}
                    >
                      <Image
                        source={require("../assets/green.png")}
                        resizeMode={"contain"}
                        style={{ height: 62, width: 62 }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Animated.View>
          </View>
        </Modal>
      </>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.83)"
  },
  animatedView: {
    flex: 1,
    paddingTop: 50
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 32
  },
  closeButton: {
    borderRadius: 999,
    width: 64,
    height: 64,
    backgroundColor: "#EC8D93",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    borderRadius: 24,
    width: "100%",
    height: "85%"
  },
  checkButton: {
    position: "absolute",
    bottom: "26%",
    borderRadius: 20,
    width: 160,
    height: 32,
    backgroundColor: "#EC8D93",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  checkTxt: {
    fontSize: 12,
    fontFamily: "avenirNextCondensedBoldItalic",
    color: "#FFF"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#f2f2f2"
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: "#FE474C",
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5
  },
  card1: {
    backgroundColor: "#FE474C"
  },
  card2: {
    backgroundColor: "#FEB12C"
  },
  label: {
    lineHeight: 400,
    textAlign: "center",
    fontSize: 55,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  footer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    width: 220,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: "rgb(246,190,66)",
    borderRadius: 55,
    marginTop: -15
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#01df8a"
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 75,
    borderWidth: 6,
    borderColor: "#fd267d"
  }
});
