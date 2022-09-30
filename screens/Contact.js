import { StyleSheet, ScrollView,StatusBar } from "react-native";
import React from "react";
import ContactSec from "../Components/contectComponent";
const Contact = () => {
  return (
    <ScrollView>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <ContactSec />
    </ScrollView>
  );
};

export default Contact;

const styles = StyleSheet.create({});
