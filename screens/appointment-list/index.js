import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, SafeAreaView, Image, FlatList } from "react-native";

const AppointmentListScreen = () => {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    setAppointments([{
      id: 1,
      name: "Appointment",
      date: "17 June 2022",
      time: "12:00 AM",
      image: require("./assets/crowdbotics.png")
    }, {
      id: 2,
      name: "Appointment",
      date: "17 May 2022",
      time: "02:00 AM",
      image: require("./assets/crowdbotics.png")
    }, {
      id: 3,
      name: "Appointment",
      date: "17 April 2022",
      time: "12:00 AM",
      image: require("./assets/crowdbotics.png")
    }, {
      id: 4,
      name: "Appointment",
      date: "17 March 2022",
      time: "12:00 AM",
      image: require("./assets/crowdbotics.png")
    }, {
      id: 5,
      name: "Appointment",
      date: "17 March 2022",
      time: "12:00 AM",
      image: require("./assets/crowdbotics.png")
    }, {
      id: 6,
      name: "Appointment",
      date: "17 March 2022",
      time: "12:00 AM",
      image: require("./assets/crowdbotics.png")
    }, {
      id: 7,
      name: "Appointment",
      date: "17 March 2022",
      time: "12:00 AM",
      image: require("./assets/crowdbotics.png")
    }]);
  }, []);
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Appointments</Text>
        <Image source={require("./assets/calendar.png")} />
      </View>
      <FlatList style={styles.list} data={appointments} keyExtractor={appointment => appointment.id.toString()} renderItem={({
      item
    }) => <Appointment item={item} />} contentContainerStyle={styles.listContainer} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    paddingHorizontal: 20
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  },
  list: {
    paddingTop: 0,
    marginHorizontal: 20,
    backgroundColor: "#f1f1f1"
  },
  listContainer: {
    margin: 0
  }
});
export default AppointmentListScreen;

const Appointment = ({}) => {
  return;
};