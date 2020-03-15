import * as React from "react";
import AndroidSafeAreaView from "../components/android/AndroidSafeAreaView";
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

interface PropsInterface {
  memeURL: string;
  shareText: string;
  isVisible: boolean;
  onClose: () => void;
  offerNavigation: any;
  navigation: any;
}

interface StateInterface {
  data: any;
}

class FoodSelection extends React.Component<PropsInterface, StateInterface> {
  private swiper: any;
  public constructor(props: PropsInterface) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          title: "Mc Donalds",
          distance: 100
        },
        {
          id: 1,
          title: "Secret Recipe",
          distance: 200
        },
        {
          id: 2,
          title: "Nandos",
          distance: 50
        },
        {
          id: 3,
          title: "Subway",
          distance: 60
        },
        {
          id: 4,
          title: "Hungry Jacks",
          distance: 90
        },
        {
          id: 5,
          title: "KFC",
          distance: 70
        }
      ]
    };
  }

  private shuffleArray = array => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  public componentDidMount = () => {};

  public render(): React.ReactNode {
    const shuffledData = this.shuffleArray(this.state.data);
    return (
      <AndroidSafeAreaView>
        <View style={{ flex: 1 }}>
          <CardStack
            style={styles.content}
            renderNoMoreCards={() => (
              <Text style={{ fontWeight: "700", fontSize: 18, color: "gray" }}>
                {""}
              </Text>
            )}
            ref={swiper => {
              this.swiper = swiper;
            }}
            onSwiped={() => console.log("onSwiped")}
            onSwipedLeft={() => this.props.navigation.navigate("Shake")}
            onSwipedRight={() => console.log("onSwipedLeft")}
          >
            <Card style={[styles.card, styles.card1]}>
              {shuffledData.map((food: any, i: any) => {
                return (
                  <View key={food.id}>
                    {i === 0 ? (
                      <View>
                        <Text style={styles.label}>{food.title}</Text>
                        <Text>
                          ({food.distance} near you)
                        </Text>
                      </View>
                    ) : null}
                  </View>
                );
              })}
            </Card>
          </CardStack>

          <View style={styles.footer}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, styles.red]}
                onPress={() => {
                  this.props.navigation.navigate("Shake");
                }}
              >
                <Image
                  source={require("../assets/red.png")}
                  resizeMode={"contain"}
                  style={{ height: 62, width: 62 }}
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
      </AndroidSafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  animatedView: {
    flex: 1,
    paddingTop: 50
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 400
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

export default FoodSelection;
