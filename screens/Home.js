import { ScrollView, StyleSheet,StatusBar } from "react-native";
import React from "react";
import Herosec from "../Components/Herosec";
const Home = () => {
  return (
    <ScrollView>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Herosec />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
