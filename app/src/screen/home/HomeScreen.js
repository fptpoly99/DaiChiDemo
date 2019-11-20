import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList
} from "react-native";
import Card from "../../components/Card";
import Card2 from "../../components/Card2";
import Colors from "../../constant/Colors";
import styles from "./styles";
const img = require("../../../res/images/gif.png");
const imgBackground = require("../../../res/images/Path30.png");
const imgArrow = require("../../../res/images/Path31.png");
const imgCoin = require("../../../res/images/Group2218.png");
const imgPoint = require("../../../res/images/Group29.png");
const imgUsedPoint = require("../../../res/images/Group27.png");
const img3 = require("../../../res/images/Group127.png");
const imgUtilities = require("../../../res/images/Group26.png");
const imgChat = require("../../../res/images/Group25.png");
const imgOrder = require("../../../res/images/Group30.png");
const imgTv = require("../../../res/images/Intersection19.png");
const img1 = require("../../../res/images/Intersection10.png");
const img2 = require("../../../res/images/Intersection3.png");
const imgGuarantee = require("../../../res/images/Group2221.png");
const img4 = require("../../../res/images/Intersection4.png");
const img5 = require("../../../res/images/Intersection5.png");
const img6 = require("../../../res/images/Intersection7.png");

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export default function HomeScreen(props) {
  return (
    <ImageBackground
      source={imgBackground}
      resizeMode="cover"
      style={styles.container}
    >
      <ScrollView>
        <View style={{ height: null, width: deviceWidth }}>
          <View style={styles.headerContainer}>
            <Text style={styles.textHeader1}>Xin chào,</Text>
            <Text style={styles.textHeader2}>Lê Thiên</Text>
          </View>
          <Card style={styles.cardContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textCard}>Điểm tích lũy</Text>
              <Text></Text>
              <View style={styles.pointContainer}>
                <Image source={imgCoin} style={styles.imgCoin} />
                <Text style={styles.textCoin}>2000</Text>
                <Image source={imgArrow} />
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.cardItemRow}>
                <TouchableOpacity style={styles.buttonItem}>
                  <Image source={imgPoint} />
                  <Text style={styles.textItem}>Tích điểm</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonItem}>
                  <Image source={imgUsedPoint} />
                  <Text style={styles.textItem}>Sử dụng điểm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonItem}>
                  <Image source={imgUtilities} />
                  <Text style={styles.textItem}>Tiện ích</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.cardItemRowBelow}>
                <TouchableOpacity style={styles.buttonItem}>
                  <Image source={imgChat} />
                  <Text style={styles.textItem}>Hỏi - đáp</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonItem}>
                  <Image source={imgOrder} />
                  <Text style={styles.textItem}>Đặt hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonItem}>
                  <Image source={imgGuarantee} />
                  <Text style={styles.textItem}>Bảo hành</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Card>
          <View style={styles.productContainer2}>
            <Text style={styles.textProduct}>SẢN PHẨM</Text>
            <ScrollView horizontal={true}>
              <Card2>
                <View style={styles.productContainer}>
                  <Image source={img1} />
                </View>
                <View style={{ paddingHorizontal: 8, }}>
                  <View>
                    <Text style={styles.titleProdcut}>TIVI DaiChi DC-</Text>
                    <Text style={styles.titleProdcut}>TV332D8900</Text>
                  </View>
                  <View style={styles.textPriceContainer}>
                    <Image
                      source={img3}
                      resizeMode="cover"
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.textPrice}>30,000,000 đ</Text>
                  </View>
                  <Text style={styles.textPriceKm}>27,000,000 đ</Text>
                </View>
              </Card2>
              <Card2>
                <View style={styles.productContainer}>
                  <Image source={img1} />
                </View>
                <View style={{ paddingHorizontal: 8, paddingTop: 8 }}>
                  <View>
                    <Text style={styles.titleProdcut}>Máy xay sinh tố</Text>
                    <Text style={styles.titleProdcut}>Halogen DAIICHI</Text>
                  </View>
                  <View style={styles.productContainer3}>
                    <Image
                      source={img3}
                      resizeMode="cover"
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.textPrice2}>5,950,000 đ</Text>
                  </View>
                </View>
              </Card2>

              <Card2>
                <View style={styles.productContainer}>
                  <Image source={img2} />
                </View>
                <View style={{ paddingHorizontal: 8, paddingTop: 8 }}>
                  <View>
                    <Text style={styles.titleProdcut}>Bút máy Picasso -</Text>
                    <Text style={styles.titleProdcut}>Mối tình đầu</Text>
                  </View>
                  <View style={styles.productContainer3}>
                    <Image
                      source={img3}
                      resizeMode="cover"
                      style={{ marginRight: 5 }}
                    />
                    <Text style={styles.textPrice2}>420,000 đ</Text>
                  </View>
                </View>
              </Card2>
            </ScrollView>
            <View>
              <View style={styles.newsContainer}>
                <Text style={styles.titleNews}>TIN TỨC</Text>
                <Text></Text>
                <TouchableOpacity>
                  <Text style={styles.textPrice2}>Tất cả</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.listContainer}>
              <Image source={img4} style={{ marginRight: 10 }} />
              <View>
                <Text style={styles.textList}>
                  Daiichi Việt Nam chính thức ra mắt
                </Text>
                <Text style={styles.textList}>
                  sản phẩm Tivi 32inch hoàn toàn
                </Text>
                <Text style={styles.textList}>mới DCTV-TV32D8800</Text>

                <Text style={styles.textList1}>9:00 22/09/2019</Text>
              </View>
            </View>

            <View style={styles.listContainer1}>
              <Image source={img5} style={{ marginRight: 10 }} />
              <View>
                <Text style={styles.textList}>
                  Daiichi chính thức ra mắt dòng sản
                </Text>
                <Text style={styles.textList}>phẩm tủ đông mới</Text>

                <Text style={styles.textList1}>9:00 06/08/2019</Text>
              </View>
            </View>

            <View style={styles.listContainer2}>
              <Image source={img6} style={{ marginRight: 10 }} />
              <View>
                <Text style={styles.textList}>
                  Gia dụng Daiichi tại trung tâm điện
                </Text>
                <Text style={styles.textList}>
                  máy CHH phố Sủi, Gia Lâm, Hà Nội
                </Text>

                <Text style={styles.textList1}>9:00 06/08/2017</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
HomeScreen.navigationOptions = () => {
  return {
    header: null
  };
};
