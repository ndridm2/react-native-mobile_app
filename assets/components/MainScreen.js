import "react-native-gesture-handler";

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Kalkulator")}
        >
          <Image
            source={require("./image/calculator.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Kalkulator</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Contact")}
        >
          <Image
            source={require("./image/contact.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Image
            source={require("./image/gallery.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Gallery</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Dzikir")}
        >
          <Image
            source={require("./image/mosque.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Dzikir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "85%",
    padding: 5,
    flexWrap: "wrap",
    marginTop: 250,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  box: {
    width: "40%",
    height: "20%",
    padding: 5,
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  txtbtn: {
    marginTop: 10,
    color: 'black'
  }
});
