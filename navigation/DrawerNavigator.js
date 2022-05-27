import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from '../navigation/TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Tab.Screen name = 'Home' component = {TabNavigator} />
            <Tab.Screen name = 'Profile' component = {Profile} />
        </Drawer.Navigator>
    )
}