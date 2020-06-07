import { createStackNavigator } from '@react-navigation/stack';
import OverviewScreen from '../containers/OverviewPage.screen';
import DetailsScreen from '../containers/DetailsPage.screen';
import * as React from 'react';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator initialRouteName="Overview">
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
);
}

export default AppNavigator;
