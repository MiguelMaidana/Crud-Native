import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from "./view/Inicio"
import NuevoCliente from "./view/NuevoCliente"
import DetallesClientes from "./view/DetallesCliente"
import BarraSuperior from "./components/ui/Barra"

import{ DefaultTheme, Provider as PaperProvider} from "react-native-paper"

const Stack = createStackNavigator();


// definir el tema
const theme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    primary:"#1774F2",
    accent:"#0655BF"
  }

}


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Inicio"
        screenOptions={{
          headerStyle:{
            backgroundColor : theme.colors.primary
          },
          headerTintColor: theme.colors.surface,
          headerTitleStyle :{
            fontWeight :"bold"
          }
        }}
      >
        <Stack.Screen 
          name="Inicio"
          component={Inicio}
          options={({navigation,route})=>({
            headerLeft:(props)=> <BarraSuperior 
                                    {...props} 
                                    navigation={navigation} 
                                    route={route}/>
          })} 
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