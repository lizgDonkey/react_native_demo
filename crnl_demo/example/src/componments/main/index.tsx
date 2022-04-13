import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SessionTab from './sessions';
import ContactTab from './contacts'
import SettingTab from './setting';
const Tab = createBottomTabNavigator();

function MainScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Sessions" component={SessionTab} />
            <Tab.Screen name="Contacts" component={ContactTab} />
            <Tab.Screen name="Settings" component={SettingTab} />
        </Tab.Navigator>
    );
}

export default MainScreen;