import { Stack, Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ImageBackground, Image, Text } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Entypo from "@expo/vector-icons/Entypo";
import { useIsFocused } from "@react-navigation/native";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Entypo name="home" size={24} color="#black" />
              <Text style={{ fontSize: 10 }}>Home</Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="NutritionPlanner"
        options={{
          title: "Nutrition",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <>
              <FontAwesome6 name="apple-whole" size={24} color="black" />
              <Text style={{ fontSize: 10 }}>Nutrition</Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="ProgressTracker"
        options={{
          title: "Progress",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <>
              <Entypo name="clipboard" size={24} color="black" />
              <Text style={{ fontSize: 10 }}>Progress</Text>
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="WorkoutPlanner"
        options={{
          title: "Workouts",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <>
              <FontAwesome6 name="dumbbell" size={24} color="black" />
              <Text style={{ fontSize: 10 }}>Workouts</Text>
            </>
          ),
        }}
      />
    </Tabs>
  );
}
