import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginNotification, setLoginNotification] = useState("");
  const [RegisNotification, setRegisNotification] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      setLoginNotification("Both fields are required.");
    } else if (username === "user" && password === "12345") {
      setLoginNotification("Login successful!");
      navigation.replace("Home");
    } else {
      setLoginNotification("Invalid credentials.");
    }
  };

  const handleRegister = () => {
    setRegisNotification("Menunggu untuk registtrasi");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <KeyboardAvoidingView enabled>
          <Image source={require("./images/user.png")} style={styles.image} />
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleLogin}
          >
            <Text style={styles.buttonTextStyle}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonStyleRegis}
            activeOpacity={0.5}
            onPress={handleRegister}
          >
            <Text style={styles.buttonTextStyle}>Register</Text>
          </TouchableOpacity>

          {loginNotification ? (
            <Text style={styles.notification}>{loginNotification}</Text>
          ) : null}
          {RegisNotification ? (
            <Text style={styles.notification}>{RegisNotification}</Text>
          ) : null}
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  notification: {
    backgroundColor: "#fff",
    elevation: 10,
    marginTop: 16,
    marginStart: 148,
    textAlign: "center",
    color: "red",
    width: 120,
    borderRadius: 5,
  },
  boxBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 20,
    height: 20,
  },
  buttonStyle: {
    backgroundColor: "#007bff",
    height: 30,
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonTextStyle: {
    color: "white",
    paddingVertical: 4,
    fontSize: 16,
  },
  buttonStyleRegis: {
    backgroundColor: "grey",
    height: 30,
    alignItems: "center",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default LoginPage;
