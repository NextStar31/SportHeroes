import React from "react";
import { StyleSheet } from "react-native";

import { Activity } from "../models/UserActivities";
import { isBonus, isChallenge, isExercice } from "../utils/activity";
import ActivityMeasure from "./ActivityMeasure";
import ActivityTypeLabel from "./ActivityTypeLabel";
import { Text, View } from "./Themed";
import { Image } from "react-native";
import ActivityImage from "./ActivityImage";
import Point from "./Point";

export default function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <View style={styles.activityContainer}>
      <ActivityImage activityType={activity.type}></ActivityImage>
      {isExercice(activity) && (
        <>
          <View style={styles.content}>
            <ActivityTypeLabel type={activity.payload.type}></ActivityTypeLabel>
            <ActivityMeasure exercice={activity.payload}></ActivityMeasure>
          </View>
          <Point point={activity.payload.points}></Point>
        </>
      )}
      {isChallenge(activity) && (
        <View style={styles.content}>
          <Text>Challenge complété</Text>
          <Text>{activity.payload.display.title}</Text>
          <Image
            style={styles.challengeImg}
            source={{ uri: activity.payload.display.badge }}
          ></Image>
        </View>
      )}
      {isBonus(activity) && (
        <>
          <View style={styles.content}>
            <Text>{activity.payload.bonusName}</Text>
          </View>
          <Point point={activity.payload.points}></Point>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  activityContainer: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    flexGrow: 1,
    marginLeft: "10px",
    justifyContent: "center",
  },
  activityBadge: {
    width: "50px",
    height: "50px",
  },
  challengeImg: {
    width: "100px",
    height: "100px",
    margin: "auto",
    marginTop: "12px",
  },
});
