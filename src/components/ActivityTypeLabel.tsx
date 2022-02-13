import React from "react";
import { ExerciceType } from "../models/UserActivities";
import { Text } from "./Themed";

export default function ActivityTypeLabel({ type }: { type: ExerciceType }) {
  const labelsSet = {
    [ExerciceType.Walking]: "Marche",
    [ExerciceType.Cycling]: "Vélo",
  };

  return <Text>{labelsSet[type]}</Text>;
}
