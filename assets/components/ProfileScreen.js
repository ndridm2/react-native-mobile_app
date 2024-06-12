import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from "react-native";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.itemContainer}>
        <Image source={require("./image/user.png")} style={styles.image} />
        <Text style={styles.textName}>Username</Text>
        <Text style={styles.textEmail}>user@email.com</Text>
        <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>
                        Register
                    </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
    elevation: 20,
    borderRadius: 6,
    width: 250,
    height: 250,
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 25,
    marginBottom: 20,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
    marginBottom: 6,
  },
  textInfo: {
    fontSize: 14,
    marginLeft: 10,
    color: "grey",
    marginTop: 6,
  },
});