import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from './screens/ChatScreen';
import ThongBaoScreen from './screens/ThongBaoScreen';
import BangTinScreen from './screens/BangTinScreen';
import FriendScreen from './screens/FriendScreen';
import SettingScreen from './screens/SettingScreen';
import VideoCall from './screens/VideoCall';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ThemBanScreen from './screens/ThemBanScreen/themBanScreen';
import TaoBaiViet from './screens/TaoBaiViet/taoBaiViet';

import { createStackNavigator } from '@react-navigation/stack';

import ChiTietTinNhan from './screens/ChiTietTinNhan';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App({ navigation, route }) {
    let tabBarVisible = true;

    function AddFriend() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="F"
                    component={FriendScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                />
                <Stack.Screen
                    name="ThemBanBe"
                    component={ThemBanScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                />
            </Stack.Navigator>
        );
    }

    function BangTin() {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="BangTinScreen"
                    component={BangTinScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                />
            </Stack.Navigator>
        );
    }

    function HomeTabBar() {
        return (
            <Tab.Navigator options={{ tabBarInactiveTintColor: '#47A9FF', tabBarInactiveTintColor: 'lightgray' }}>
                <Tab.Screen
                    name="ChatScreen"
                    component={ChatScreen}
                    options={{
                        headerShown: false,
                        // tabBarShowLabel: false,
                        tabBarHideOnKeyboard: true,
                        tabBarIcon: ({ color }) => <Ionicons name="chatbox" size={30} color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Friend"
                    component={AddFriend}
                    options={{
                        headerShown: false,
                        // tabBarShowLabel: false,
                        tabBarIcon: ({ color }) => <Ionicons name="person" size={30} color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Bảng tin"
                    component={BangTin}
                    options={{
                        headerShown: false,
                        // tabBarShowLabel: false,
                        tabBarIcon: ({ color }) => <Ionicons name="newspaper" size={30} color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Thông báo"
                    component={ThongBaoScreen}
                    options={{
                        headerShown: false,
                        // tabBarShowLabel: false,
                        tabBarIcon: ({ color }) => <FontAwesome name="bell" size={30} color={color} />,
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{
                        headerShown: false,
                        // tabBarShowLabel: false,
                        tabBarIcon: ({ color }) => <Ionicons name="settings" size={30} color={color} />,
                    }}
                />
            </Tab.Navigator>
        );
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="HomeTabBar"
                    component={HomeTabBar}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                />
                <Stack.Screen
                    name="ChiTietTinNhan"
                    component={ChiTietTinNhan}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                />
                <Stack.Screen
                    name="VideoCall"
                    component={VideoCall}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                />
                <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                />
                <Stack.Screen
                    name="TaoBaiViet"
                    component={TaoBaiViet}
                    options={{
                        headerShown: false,
                        tabBarShowLabel: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
