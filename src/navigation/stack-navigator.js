import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SavedOffers,OffersDetail } from '../screens';
const Stack = createNativeStackNavigator();


const StackNavigator=()=>{
    return(

        <Stack.Navigator  >
        <Stack.Screen name="SavedOffers" component={SavedOffers} options={{headerShown:false}}/>
        <Stack.Screen name="OffersDetail" component={OffersDetail} options={{headerShown:false}}/>
         
      </Stack.Navigator>
    )
}
export default StackNavigator;