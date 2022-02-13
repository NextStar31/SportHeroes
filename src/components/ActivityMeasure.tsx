import React from "react";
import { Exercice, ExerciceType } from "../models/UserActivities";
import { durationToTime } from "../utils/time";
import { Text } from "./Themed";

export default function ActivityMeasure({ exercice }: { exercice: Exercice }) {
  switch (exercice.type) {
    case ExerciceType.Cycling:
      return (
        <Text>
          {exercice.distance} km - {durationToTime(exercice.duration)}
        </Text>
      );
    default:
      return <Text>{exercice.steps} pas</Text>;
  }
}
