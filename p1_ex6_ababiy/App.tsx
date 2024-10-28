import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Flex = () => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/hammer.png")} style={styles.image} />
      <View style={{ flex: 3, backgroundColor: "red", zIndex: 0 }} />
      <View style={{ flex: 2, backgroundColor: "green", zIndex: 0 }} />
      <View style={{ flex: 3, backgroundColor: "red", zIndex: 0 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    width: 250,
    height: 250,
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1, 
  },
});

export default Flex;
