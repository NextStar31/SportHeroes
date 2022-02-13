import React from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ActivityList from "../components/ActivityList";

import { View } from "../components/Themed";
import { ActivityType } from "../models/UserActivities";
import { RootState } from "../stores/configureStore";

export default function ActivitiesScreen() {
  const { userActivities } = useSelector(
    (state: RootState) => state.activities
  );
  return (
    <View style={styles.container}>
      <ActivityList
        activities={userActivities.data.filter(
          (i) => i.type === ActivityType.Activity
        )}
      ></ActivityList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
