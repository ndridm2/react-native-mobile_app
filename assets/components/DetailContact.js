import { FlashList } from "@shopify/flash-list";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

const API_ENDPOINT = "https://randomuser.me/api/?inc=gender,name,nat";

const DetailContact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);

      console.log(json.results);

      setIsLoading(false);
    } catch (error) {
      setError();
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#5500dc" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          Error in Fetching data ... Please check your internet connection
        </Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlashList
          data={data}
          keyExtractor={(item) => item.login.username}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image
                source={{uri: item.picture.thumbnail}}
                style={styles.image}
              />
              <Text style={styles.textName}>{item.name.first} {item.name.last}</Text>
              <Text style={styles.textEmail}>user@email.com</Text>
              <Text style={styles.textInfo}>+6281111</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default DetailContact;

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
