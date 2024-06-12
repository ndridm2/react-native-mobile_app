import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Header, createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./assets/components/LoginPage";
import HomePage from "./assets/components/HomePage";
import CalculatorPage from "./assets/components/CalculatorPage";
import DzikirPage from "./assets/components/DzikirPage";
import GalleryPage from "./assets/components/GalleryPage";
import ContactPage from "./assets/components/ContactPage";
import { Button, } from "react-native-paper";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="LoginPage">
      <Stack.Screen name="Login" component={LoginPage} options={{headerTitle: ""}} />
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={({ navigation }) => ({
          headerRight: () => (
            <Button onPress={() => navigation.replace("Login")}>Logout</Button>
          ),
        })}
      />
      <Stack.Screen name="Kalkulator" component={CalculatorPage} />
      <Stack.Screen name="Dzikir" component={DzikirPage} />
      <Stack.Screen name="Gallery" component={GalleryPage} />
      <Stack.Screen name="Contact" component={ContactPage} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
