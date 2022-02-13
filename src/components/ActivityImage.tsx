import React from "react";
import { StyleSheet } from "react-native";
import { ActivityType } from "../models/UserActivities";
import { Image } from "react-native";

export default function ActivityImage({
  activityType,
}: {
  activityType: ActivityType;
}) {
  let uri = "";
  switch (activityType) {
    case ActivityType.Activity:
      uri =
        "https://sh-tech-interview.s3.eu-west-3.amazonaws.com/frontend/svg-walking.svg";
      break;
    case ActivityType.Challenge:
      uri =
        "https://sh-tech-interview.s3.eu-west-3.amazonaws.com/frontend/svg-flag.svg";
      break;

    default:
      uri =
        "https://sh-tech-interview.s3.eu-west-3.amazonaws.com/frontend/svg1.svg";
      break;
  }

  return (
    <Image
      style={styles.activityBadge}
      source={{
        uri,
      }}
    ></Image>
  );
}

const styles = StyleSheet.create({
  activityBadge: {
    width: "50px",
    height: "50px",
  },
});
