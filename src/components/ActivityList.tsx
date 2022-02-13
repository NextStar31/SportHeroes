import React from "react";
import { FlatList, ScrollView, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

import { Activity } from "../models/UserActivities";
import ActivityCard from "../components/ActivityCard";
import { formatDate } from "../utils/time";
import dayjs from "dayjs";

export default function ActivityList({
  activities,
}: {
  activities: Activity[];
}) {
  return (
      <ScrollView style={styles.scrollview}>
        {Object.entries(groupByDate(activities)).map(([key, items]) => (
          <View style={styles.card} key={key}>
            <Text>{formatDate(key)}</Text>

            <FlatList
              style={styles.activityContainer}
              data={items}
              renderItem={({ item }) => {
                return (
                  <View>
                    <ActivityCard activity={item}></ActivityCard>
                    <View
                      style={styles.separator}
                      lightColor="#eee"
                      darkColor="rgba(255,255,255,0.1)"
                    />
                  </View>
                );
              }}
              keyExtractor={(item, index) => item.resourceId}
            />
          </View>
        ))}
      </ScrollView>
  );
}

const groupByDate = (xs: any[]): { [key: string]: any[] } => {
  const result = xs.reduce(function (rv, x) {
    const date = dayjs(x.date).format("YYYY-MM-DD");
    (rv[date] = rv[date] || []).push(x);
    return rv;
  }, {});
  console.log(result);

  return result;
};

const styles = StyleSheet.create({
  scrollview: {
    width: "100%",
  },
  activityContainer: {
    width: "100%",
  },
  separator: {
    marginTop: "10px",
    height: 1,
    width: "100%",
  },
  card: {
    margin: "10px",
    marginBottom: "0px",
  },
});
