import { Stack, Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ImageBackground, Image, Text} from "react-native";

export default function RootLayout() {
  return(
  <Tabs>
    <Tabs.Screen 
        name="index" 
        options={{ 
            title: "Home", 
            headerShown: false,
            // tabBarIcon: ({ focused }) => (
            //     // <>
            //     //     <ImageBackground 
            //     //         source={images.highlight}
            //     //         className="flex flex-row"
            //     //     >
            //     //       <Image 
            //     //         source={icons.homeBlack}
            //     //         />
            //     //       <Text>Home</Text>
            //     //     </ImageBackground>
            //     // </>
            // )
        }}
    />
    <Tabs.Screen 
      name="NutritionPlanner" 
      options={{ 
        title: "Nutrition", 
        headerShown: false }}/>
    <Tabs.Screen 
      name="ProgressTracker" 
      options={{ 
        title: "Progress", 
        headerShown: false }}/>
     <Tabs.Screen 
      name="WorkoutPlanner" 
      options={{ 
        title: "Workouts", 
        headerShown: false }}/>
    </Tabs>
  );
}