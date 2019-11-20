import React, { useState } from "react";
import { Platform, Text, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "../screen/home/HomeScreen";
import moduleName from '../../../demo';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constant/Colors";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
const imgHome = require("../../res/images/Home.png");
const imgProduct = require("../../res/images/Image1.png");
const imgTakePoint = require("../../res/images/gif.png");
const imgNotification = require("../../res/images/Noti.png");
const imgPerson = require("../../res/images/person.png");
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTitleStyle: {
    fontFamily: "Roboto-Italic"
  },
  headerBackTitleStyle: {
    fontFamily: "Roboto-Italic"
  },
  headerTintColor: Platform.OS === "android" ? "blue" : "blue",
  headerTitle: "A Screen"
};

const MealsNavigator = createStackNavigator({
  Home: HomeScreen
});

const FavNavigator = createStackNavigator(
  {
    screen: () => null
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Home: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name={Platform.OS === "android" ? "md-home" : "ios-home"}
            size={23}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: "#fff",
      activeTintColor: "red",
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 9 }}>
            Trang Chủ
          </Text>
        ) : (
          "Meals"
        )
    }
  },
  Product: {
    screen: () => null,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Image source={imgProduct} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 9 }}>
            Sản phẩm
          </Text>
        ) : (
          "Meals"
        )
    }
  },
  TakePoint: {
    screen: () => null,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Image source={imgTakePoint} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 9 }}>
            Dùng điểm
          </Text>
        ) : (
          "Meals"
        )
    }
  },
  Notification: {
    screen: () => null,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-notifications-outline"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 9 }}>
            Thông báo
          </Text>
        ) : (
          "Meals"
        )
    }
  },
  Person: {
    screen: () => null,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Image source={imgPerson} />;
      },

      tabBarColor: Colors.accentColor,
      tabBarLabel:
        Platform.OS === "android" ? (
          <Text style={{ fontFamily: "Roboto-Regular", fontSize: 9 }}>
            Tài khoản
          </Text>
        ) : (
          "Meals"
        )
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.textPrice,
        shifting: false,
        activeColor: Colors.textPrice,
        barStyle: {
          backgroundColor: "#fff"
        }
      })
    : createBottomTabNavigator(
        tabScreenConfig,
        {
          tabBarOptions: {
            labelStyle: {
              fontFamily: "Roboto-Italic"
            }
          }
        },
        {
          tabBarOptions: {
            style: {
              height: 70
            }
          }
        }
      );

// const PlaceFavTabNavigator = createBottomTabNavigator(
//   {
//     YourLevel: {
//       screen: HomeScreen,
//       navigationOptions: {
//         tabBarIcon: tabInfo => <Image source={imgHome} color = {tabInfo.tintColor}  />
//       },
//     },

//     Exams: {
//       screen: () => null,
//       navigationOptions: {
//         tabBarIcon: tabInfo => (
//           <Ionicons name="trophy" size={25} color={tabInfo.tintColor} />
//         )
//       }
//     },
//     Course: {
//       screen: () => null,

//       navigationOptions: {
//         tabBarIcon: tabInfo => <Image source={imgHome} color = 'red' />
//       }
//     },
//     Wishlist: {
//       screen: () => null,
//       navigationOptions: {
//         tabBarIcon: tabInfo => (
//           <Ionicons name="heart" size={25} color={tabInfo.tintColor} />
//         )
//       }
//     },
//     Person: {
//       screen: () => null,
//       navigationOptions: {
//         tabBarIcon: tabInfo => (
//           <Ionicons name="heart" size={25} color={tabInfo.tintColor} />
//         )
//       }
//     }

//     // Main:MainScreen,
//     // IntroSlider:IntroSliderScreen,
//     // Confirm:ConfirmScreen
//   },
//   {

//     tabBarOptions: {
//       activeTintColor: Colors.textPrice,
//       showLabel: true,
//       style: {
//         height: 50
//       }
//     }
//     // tabBarComponent: () => null,
//   }
// );

export default createAppContainer(MealsFavTabNavigator);
