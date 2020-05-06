import React from "react"
import {View , StyleSheet} from "react-native"
import {TextInput, Headline,Button} from "react-native-paper"
import globalStyles from "../styles/global"

const NuevoCLiente =()=>{

    const leerNombre=()=>{
        console.log("escribiendo......")
    }
    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
            <TextInput
                label="Nombre"
                placeholder="Miguel"
                onChangeText={()=>leerNombre()}
                style={styles.input}
            />
              <TextInput
                label="Telefono"
                placeholder="EJ : 1134434324"
                onChangeText={()=>leerNombre()}
                style={styles.input}
            />
              <TextInput
                label="Correo"
                placeholder="correo@correo"
                onChangeText={()=>leerNombre()}
                style={styles.input}
            />
              <TextInput
                label="Empresa"
                placeholder="Nombre Empresa"
                onChangeText={()=>leerNombre()}
                style={styles.input}
            />
           
        </View>
    )
}

const styles = StyleSheet.create({
    input :{
        marginBottom:20,
        backgroundColor:"transparent"
    }
})


export default NuevoCLiente