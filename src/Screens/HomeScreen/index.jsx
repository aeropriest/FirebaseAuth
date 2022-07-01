import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { auth } from "../../../firebase";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  console.log("---------------HomeScreen---------------");
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Sign out");
        navigation.navigate("Login");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <View style={styles.container}>
      <Text>Email: {auth?.currentUser?.email} </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
