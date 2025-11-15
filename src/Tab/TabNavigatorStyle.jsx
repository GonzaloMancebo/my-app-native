import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const bottomTabsStyles = {
  screenOptions: {
    tabBarStyle: {
      backgroundColor: "#f2f2f2",
      padding: 5,
    },
    tabBarLabelStyle: {
      textTransform: "none",
      fontSize: 16,
      fontWeight: "bold",
    },
  },
};
