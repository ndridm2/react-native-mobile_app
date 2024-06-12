import "react-native-gesture-handler";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Kalkulator")}
        >
          <Image
            source={require("./images/calculator.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Kalkulator</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Dzikir")}
        >
          <Image
            source={require("./images/mosque.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Dzikir</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Gallery")}
        >
          <Image
            source={require("./images/gallery.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Gallery</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.box}>
        <TouchableOpacity
          style={styles.inner}
          onPress={() => navigation.navigate("Contact")}
        >
          <Image
            source={require("./images/contact.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.txtbtn}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: "35%",
    height: "20%",
    padding: 5,
  },
  inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    backgroundColor: "#fff",
    elevation: 10,
  },
  txtbtn: {
    marginTop: 10,
    color: "black",
  },
});
