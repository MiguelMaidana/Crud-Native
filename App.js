import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from "./view/Inicio"
import NuevoCliente from "./view/NuevoCliente"
import DetallesClientes from "./view/DetallesCliente"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio"
          component={Inicio} 
        /> 
        <Stack.Screen 
          name="NuevoCliente"
          component={NuevoCliente}
          options={{title: "Nuevo Cliente"}}
        /> 
        <Stack.Screen 
          name="DetallesCliente" 
          component={DetallesClientes}
          options={{title: "Detalles Cliente"}}
 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;