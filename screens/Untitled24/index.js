import { CheckBox } from "react-native-elements";
import { Switch } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled24 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Switch style={styles.IVYDCMaG}></Switch><CheckBox style={styles.haRPVioB} title="Checkbox Title"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  IVYDCMaG: {
    width: 50,
    height: 25
  },
  haRPVioB: {
    width: 183,
    height: 69
  }
});
export default Untitled24;