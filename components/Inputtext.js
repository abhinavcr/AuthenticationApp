import React from "react";
import { View, Text, TextInput } from "react-native";

const Inputtext = (props) => {
  return (
    <View style={{marginVertical:7.5}}>
      <Text style={{ fontSize: 15, fontWeight: "400" }}>{props.header}</Text>
      <TextInput placeholder={props.placeholder} />
      <Text style={{ marginTop: -10, fontWeight: "bold" }}>
        ------------------------------------------------------------------
      </Text>
    </View>
  );
};

export default Inputtext;

