const React = require("react-native");
const { Platform, Dimensions, StyleSheet } = React;
import Colors from "../../constant/Colors";
import Fonts from '../../constant/Fonts';
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  container: {
    flex: 1,
    height: 150,
    width: deviceWidth
  },

  headerContainer: {
    alignItems: "center",
    marginTop: 45,
    marginBottom: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    paddingVertical: 0
  },
  textHeader1: {
    fontFamily: "Roboto-Light",
    fontSize: 12,
    color: "#fff"
  },
  textHeader2: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#fff"
  },
  cardContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  textCard: {
    fontFamily: "Roboto-Regular",
    fontSize: 16
  },
  pointContainer: {
    flexDirection: "row",
    alignItems: "center",

    color: Colors.textPrice,
    width: 70,

    justifyContent: "flex-start",
    marginRight: 12
  },
  imgCoin: {
    marginRight: 5
  },
  textCoin: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
    marginRight: 5
  },
  textContainer: {
    borderBottomWidth: 0.3,

    flex: 1.5,
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    height: 45
  },
  itemContainer: {
    flex: 4,

    paddingHorizontal: 20,
    paddingVertical: 25
  },
  cardItemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  buttonItem: {
    alignItems: "center"
  },
  textItem: {
    fontFamily: "Roboto-Regular",
    fontSize: 12
  },
  cardItemRowBelow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    
  },
  productContainer2: {
    height: deviceHeight / 2.4,
    width: "99%",

    padding: 20,
    
  },

  textProduct: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    marginBottom: 6
  },
  productContainer: {
    borderBottomWidth: 0.3,
    borderColor: "#707070"
  },
  titleProdcut: {
    fontFamily: "Roboto-Regular",
    fontSize: 15
  },
  textPriceContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  textPrice: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    color: "#979797",
    fontFamily: "Roboto-Regular",
    fontSize: 12
  },
  textPriceKm: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: Colors.textPrice,
    marginHorizontal: 18
  },
  productContainer3: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8
  },
  textPrice2: {
    color: Colors.textPrice,
    fontFamily: "Roboto-Regular",
    fontSize: 12
  },
  newsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  titleNews: {
    fontFamily: "Roboto-Regular",
    fontSize: 16
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 0,
    paddingHorizontal: 20
  },
  listContainer1: {
    flexDirection: "row",

    marginVertical: 10,
    paddingHorizontal: 20
  },
  listContainer2: {
    flexDirection: "row",
    
    marginVertical: 0,
    paddingHorizontal: 20
  },
  textList: {
    fontFamily: "Roboto-Medium",
    fontSize: 15
  },
  textList1: {
    fontFamily: "Roboto-Italic",
    fontSize: 12,
    marginVertical:6
  }
};
