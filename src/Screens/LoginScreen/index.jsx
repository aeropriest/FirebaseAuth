import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import styles from "./styles";
//import auth from "../../../firebase";

import * as firebase from "firebase";
//import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/core";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkIUB-TISVtj7Xs5MRHPMSSsA_pCRs6PE",
  authDomain: "coinwatch-16730.firebaseapp.com",
  projectId: "coinwatch-16730",
  storageBucket: "coinwatch-16730.appspot.com",
  messagingSenderId: "267594157438",
  appId: "1:267594157438:web:e56ccbec6a8edeea8c372f",
  measurementId: "G-2EM3QB2BRH",
};

const LoginScreen = () => {
  // Initialize Firebase
  let app;
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }

  const auth = firebase.auth();

  console.log("-------LoginScreen--------------------------------");
  console.log(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    console.log("LoginScreen called with password: " + password);
    console.log(auth);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(email, user);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("logged in with ", user.email);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            handleLogin();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSignUp()}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
