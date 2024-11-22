import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Menu from './Menu';
import EditMenu from './EditMenu';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  
  const [menuItems, setMenuItems] = useState([
    { name: 'Eggs Boiled', description: 'Simple boiled eggs', price: 2, category: 'Starters' },
    { name: 'French Fries', description: 'Crispy golden fries', price: 5, category: 'Starters' },
    { name: 'Grilled Steak', description: 'Juicy grilled steak', price: 15, category: 'Mains' },
    { name: 'Pasta Carbonara', description: 'Rich pasta with bacon', price: 12, category: 'Mains' },
    { name: 'Ice Cream', description: 'Vanilla ice cream scoop', price: 3, category: 'Desserts' },
    { name: 'Cheesecake', description: 'Smooth cheesecake slice', price: 4, category: 'Desserts' },
    { name: 'Soda', description: 'Cold soda can', price: 2, category: 'Drinks' },
    { name: 'Coffee', description: 'Hot brewed coffee', price: 3, category: 'Drinks' },
  ]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#67657B' }, 
          tabBarActiveTintColor: '#6BFA13',           
          tabBarInactiveTintColor: '#6BFA13',        
          tabBarIndicatorStyle: { backgroundColor: 'black' }, 
        }}
      >
        <Tab.Screen name="All Menu">
          {() => <Menu menuItems={menuItems} course={undefined} />}
        </Tab.Screen>
        <Tab.Screen name="Starters">
          {() => <Menu menuItems={menuItems} course="Starters" />}
        </Tab.Screen>
        <Tab.Screen name="Mains">
          {() => <Menu menuItems={menuItems} course="Mains" />}
        </Tab.Screen>
        <Tab.Screen name="Desserts">
          {() => <Menu menuItems={menuItems} course="Desserts" />}
        </Tab.Screen>
        <Tab.Screen name="Drinks">
          {() => <Menu menuItems={menuItems} course="Drinks" />}
        </Tab.Screen>
        <Tab.Screen name="Edit Menu">
          {() => <EditMenu menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
