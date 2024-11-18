//Para criar um projeto novo não se esqueça de copiar o babel.config.js 
//e executar expo r -c  no terminal
import React from 'react';
//npx expo install @react-navigation/native
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// Componente para envolver todo o aplicativo
//npx expo install   react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
import { NavigationContainer } from '@react-navigation/native';

//Componente para a contrução do DrawerMenu
//npx expo install @react-navigation/drawer
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tela3 from "./telas/Tela3";

function App() {
  return (
    <View style={styles.container}>
      <Text>Tela1</Text>
    </View>
  );
}
function AppTwo() {
  return (
    <View style={styles.container}>
      <Text>Tela 2</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Tela 1"
        drawerStyle={{
          backgroundColor: "blue",
          paddingVertical: 20
        }}
        screenOptions={{
          activeTintColor:"green",
          itemStyle:{marginTop:20},
          labelStyle:{fontSize:30},
          style:{backgroundColor:'purple'}
    
        }}
      >
        <Drawer.Screen
          name="Tela 1"
          component={App}
          options={
            {
              drawerLabel: (({ focused }) => <Text style={{ color: focused ? 'red' : 'black' }}>Primeira Tela</Text>),
              drawerIcon: (({ focused }) => <Icon color={focused ? 'red' : 'black'} name="home" />)
            }
          }
        />
        <Drawer.Screen
          name="Tela 2"
          component={AppTwo}
          options={
            {
              drawerLabel: (({ focused }) => <Text style={{ color: focused ? 'blue' : 'black' }}>Segunda Tela</Text>),
              drawerIcon: (({ focused }) => <Icon color={focused ? 'red' : 'black'} name="chat" />)
            }
          }
        />
        <Drawer.Screen
          name="Tela 3"
          component={Tela3}
          options={
            {
              drawerLabel: (({ focused }) => <Text style={{ color: focused ? 'brown' : 'black' }}>Terceira Tela</Text>),
              drawerIcon: (({ focused }) => <Icon color={focused ? 'red' : 'black'} name="chat" />)
            }
          }
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});