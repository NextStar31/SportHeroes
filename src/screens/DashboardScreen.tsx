import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import * as ActivitiesActions from "../stores/actions/activities.actions";
import { RootState } from "../stores/configureStore";
import dummyData from "../../assets/mockData/dummyData.json";
import { Activity, UserActivities } from "../models/UserActivities";
import ActivityCard from "../components/ActivityCard";
import { formatDate } from "../utils/time";
import dayjs from "dayjs";
import ActivityList from "../components/ActivityList";

export default function DashboardScreen({
  navigation,
}: RootTabScreenProps<"Dashboard">) {
  const { userActivities } = useSelector(
    (state: RootState) => state.activities
  );
  const dispatch = useDispatch();

  async function fetchUserActivity() {
    try {
      /*const result = await fetch(
        "https://sh-tech-interview.s3.eu-west-3.amazonaws.com/frontend/feed.json",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await result.json();*/
      const result = dummyData as UserActivities;
      if (result) {
        dispatch({
          type: ActivitiesActions.LOAD_ALL_USER_ACTIVITIES_SUCCESS,
          payload: result,
        });
      } else {
        dispatch({
          type: ActivitiesActions.LOAD_ALL_USER_ACTIVITIES_ERROR,
          payload: "Enable to fetch Data !",
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: ActivitiesActions.LOAD_ALL_USER_ACTIVITIES_ERROR,
        payload: "Error " + error,
      });
    }
  }

  useEffect(() => {
    fetchUserActivity();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityList activities={userActivities.data}></ActivityList>
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
