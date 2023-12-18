import React from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1F1F48",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 50, color: "#FFFFFF", textAlign:'center' }}>
        Welcome to KSBM Infotech
      </Text>
      <Pressable
        onPress={() => navigation.navigate("Profile")}
        style={{
          backgroundColor: "#F48534",
          width: 300,
          height: 40,
          padding: 10,
          marginTop: 25,
          alignItems: "center",
          marginHorizontal: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "bold" }}>
          Go To Profile Screen
        </Text>
      </Pressable>
    </View>
  );
};

export default Home;
