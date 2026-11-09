import {
    AccountIcon,
    FindMandorIcon,
    HomeIcon,
    MessageIcon,
} from '@/components/navbar-icons';
import { Tabs } from 'expo-router';
import { PlatformPressable } from 'expo-router/build/react-navigation';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                sceneStyle: {
                    backgroundColor: '#FAFAF9',
                },
                tabBarActiveTintColor: '#E4572E',
                tabBarInactiveTintColor: '#000000',
                // disable ripple abu-abu bawaan Android saat mehunya dipencet
                tabBarButton: (props) => (
                    <PlatformPressable
                        {...props}
                        android_ripple={{ color: 'transparent' }}
                    />
                ),
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Beranda',
                    tabBarIcon: ({ focused, color }) => (
                        <HomeIcon focused={focused} color={color} />
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name='find-mandor'
                options={{
                    title: 'Cari Mandor',
                    tabBarIcon: ({ focused, color }) => (
                        <FindMandorIcon focused={focused} color={color} />
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name='message'
                options={{
                    title: 'Pesan',
                    tabBarIcon: ({ focused, color }) => (
                        <MessageIcon focused={focused} color={color} />
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name='account'
                options={{
                    title: 'Akun',
                    tabBarIcon: ({ focused, color }) => (
                        <AccountIcon focused={focused} color={color} />
                    ),
                }}
            ></Tabs.Screen>
        </Tabs>
    );
}
