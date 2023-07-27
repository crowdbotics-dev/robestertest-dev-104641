import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ActivityIndicator style={styles.vtFSNXqT}></ActivityIndicator><CheckBox style={styles.UOPGCjEX} title="Checkbox Title"></CheckBox></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  vtFSNXqT: {
    width: 50,
    height: 50
  },
  UOPGCjEX: {
    width: 183,
    height: 69
  }
});
export default Untitled2;