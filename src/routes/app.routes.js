import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Home } from '../screens/Home';
import { Configurations } from "../screens/Configurations";
import { Icon, Text } from "native-base";
import { Target } from "../screens/Target";
const { Screen, Navigator } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={

                {
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarItemStyle: {
                        marginBottom: 10,
                    },
                    tabBarIconStyle: {
                        marginTop: 5,
                    },
                    tabBarStyle: {

                        borderTopWidth: 0,
                        elevation: 0,
                        height: 70,
                        borderWidth: 0,

                        backgroundColor: "#fff",
                    },
                }
            }>
            <Screen

                options={{

                    cardStyle: {
                        backgroundColor: "#fff",
                    },
                    tabBarIcon: (({ size, color, focused }) => (
                        <Icon
                            as={<Ionicons name={focused ? "water" : "water-outline"} />}
                            size={size}
                            color={focused ? "lightBlue.700" : "muted.400"}
                        />
                    )),
                    tabBarLabel: (({ focused, color }) => (
                        <Text color={focused ? "lightBlue.700" : "muted.400"} fontSize="xs">
                            Início
                        </Text>
                    )),



                }}
                name="Início"
                component={Home} />
            <Screen
                options={{
                    tabBarIcon: (({ size, color, focused }) => (
                        <Icon
                            as={<Ionicons name={focused ? "golf" : "golf-outline"} />}
                            size={size}
                            color={focused ? "lightBlue.700" : "muted.400"}
                        />
                    )),
                    tabBarLabel: (({ focused, color }) => (
                        <Text color={focused ? "lightBlue.700" : "muted.400"} fontSize="xs">
                            Hidratação
                        </Text>
                    )),
                }}
                name="target"
                component={Target} />
            <Screen
                options={{
                    tabBarIcon: (({ size, color, focused }) => (
                        <Icon
                            as={<Ionicons name={focused ? "settings" : "settings-outline"} />}
                            size={size}
                            color={focused ? "lightBlue.700" : "muted.400"}
                        />
                    )),
                    tabBarLabel: (({ focused, color }) => (
                        <Text color={focused ? "lightBlue.700" : "muted.400"} fontSize="xs">
                            Opções
                        </Text>
                    )),
                }}
                name="Configurations"
                component={Configurations} />


        </Navigator>
    );
}