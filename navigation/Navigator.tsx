import Shake from "../screen/Shake";
import FoodSelection from "../screen/FoodSelection";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const Navigators = createStackNavigator(
  {
    Shake: {
      screen: Shake
    },
    FoodSelection: {
      screen: FoodSelection
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

const Navigator = createAppContainer(Navigators);

export default Navigator;