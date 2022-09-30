import { ScrollView, StyleSheet, StatusBar } from "react-native";
import React from "react";
import AboutContents from "../Components/AboutContents";
const About = () => {
  return (
    <ScrollView>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <AboutContents />
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({});
