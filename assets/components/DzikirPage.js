import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const DzikirPage = ({}) => {
  const [counter, setCounter] = useState(0);
  const [initialCount, setInitialCount] = useState(0);

  const handleInitialCountChange = (value) => {
    setInitialCount(Number(value));
  };

  const handleReset = () => {
    setCounter(initialCount);
  };

  const handleClick1 = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dzikir</Text>
      <Text style={styles.counterValue}>{counter}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={handleClick1}>
          <Text>Tekan</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleReset}
          value={initialCount.toString()}
          onChangeText={handleInitialCountChange}
        >
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DzikirPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 18,
    marginVertical: 10,
    color: "#000",
    textTransform: "uppercase",
  },
  heading: {
    color: "black",
    fontSize: 35,
    fontWeight:'bold'
  },
  counterValue: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 10,
    color: "red",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  button: {
    fontSize: 16,
    padding: 13,
    margin: 5,
    borderRadius: 8,
    backgroundColor: "#90ee90",
    elevation: 20,
  },
  setInitialCountButton: {
    padding: 10,
    fontSize: 16,
    margin: 15,
    borderRadius: 8,
    backgroundColor: "#90ee90",
    elevation: 20,
  },
});
