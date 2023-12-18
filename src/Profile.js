import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Inputtext from "../components/Inputtext";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RadioButton } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from "@expo/vector-icons";

const Profile = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [selectedValue, setSelectedValue] = useState("option1");
  const [image, setImage] = useState(null);
  const [text2, setText2] = useState('');


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onChange = (e, selectedDate) => {
    const currentdate = selectedDate ;
    setDate(currentdate);
    setShow(false);
    let tDate = new Date(currentdate);
    let ftime = tDate.getHours()+':'+tDate.getMinutes();
    setText2(ftime);
  };

  const showMode = (modeToShow) => {
    setShow(true);
    setMode(modeToShow);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#1F1F48" }}>
      <View style={Styles.header}>
        <View>
          <View style={Styles.img}>
            {image && (
              <Image
                source={{ uri: image }}
                style={{
                  width: 95,
                  height: 95,
                  borderRadius: 45,
                  resizeMode: "contain",
                }}
              />
            )}
          </View>
          <Pressable
            style={{
              alignItems: "flex-end",
              marginTop: -25,
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: "#FFFFFF",
              backgroundColor: "#F48534",
              justifyContent:'center',
              alignItems:'center'
            }}
            onPress={pickImage}
          >
            <Entypo name="camera" size={10} color="white" />
          </Pressable>
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            marginTop: 15,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          +91-8287546458
        </Text>
      </View>
      <ScrollView>
        <View style={Styles.inputfield}>
          <Inputtext placeholder="Enter your name" header="Name*" />
          <View style={Styles.radioGroup}>
            <Text style={{ fontSize: 15, fontWeight: "400" }}>Gender</Text>
            <View style={Styles.radioButton}>
              <RadioButton.Android
                value="option1"
                status={selectedValue === "option1" ? "checked" : "unchecked"}
                onPress={() => setSelectedValue("option1")}
                color="#1F1F48"
              />
              <Text style={{ fontSize: 15, fontWeight: "400" }}>Male</Text>
            </View>
            <View style={[Styles.radioButton, Styles.m]}>
              <RadioButton.Android
                value="option2"
                status={selectedValue === "option2" ? "checked" : "unchecked"}
                onPress={() => setSelectedValue("option2")}
                color="#1F1F48"
              />
              <Text style={{ fontSize: 15, fontWeight: "400" }}>Female</Text>
            </View>
          </View>
          <Pressable
            style={{ marginVertical: 7.5 }}
            onPress={() => showMode('date')}
          >
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Date of Birth*
            </Text>
            {show && (
              <DateTimePicker mode={mode} value={date} onChange={onChange} />
            )}
            <Text>{date.toLocaleDateString()}</Text> 
            <Text style={{ marginTop: -10, fontWeight: "bold" }}>
              ------------------------------------------------------------------
            </Text>
          </Pressable>
          <Pressable
            style={{ marginVertical: 7.5 }}
            onPress={() => showMode('time')}
          >
            <Text style={{ fontSize: 15, fontWeight: "400" }}>
              Time of Birth
            </Text>
            {show && (
              <DateTimePicker mode={mode} value={date} onChange={onChange} />
            )}
            <Text>{text2}</Text>
            <Text style={{ marginTop: -10, fontWeight: "bold" }}>
              ------------------------------------------------------------------
            </Text>
          </Pressable>
          <Inputtext
            placeholder="Enter your place of birth"
            header="Place of Birth"
          />
          <Inputtext placeholder="Enter your email" header="Email" />
          <Inputtext
            placeholder="Enter your alternate mobile number"
            header="Alternative Phone No."
          />
          <Pressable style={Styles.btn}>
            <Text
              style={{ color: "#FFFFFF", fontSize: 15, fontWeight: "bold" }}
            >
              Update Profile
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  inputfield: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: 700,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 25,
    paddingHorizontal: 15,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2.5,
    borderColor: "#FFFFFF",
  },
  btn: {
    backgroundColor: "#F48534",
    width: 350,
    height: 40,
    padding: 10,
    marginTop: 50,
    alignItems: "center",
    marginHorizontal: 10,
    borderRadius: 10,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  m: {
    marginRight: 50,
  },
});

export default Profile;
