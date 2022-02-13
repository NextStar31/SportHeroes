import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";

export default function Point({ point }: { point: number }) {
  return (
    <View style={styles.container}>
      <Text>{point}</Text>
      <FontAwesome
        size={20}
        style={{ marginLeft: "2px", marginBottom: -3 }}
        name="bolt"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
});
