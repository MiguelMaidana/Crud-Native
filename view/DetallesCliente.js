import React from "react"
import {View , StyleSheet} from "react-native"
import {Headline, Text, Button} from "react-native-paper"
import globalStyles from "../styles/global"

const DetallesCliente =({route})=>{

   const {nombre,telefono,correo,empresa} = route.params.item
    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>{nombre}</Headline>
            <Text style={styles.texto}>Empresa : {empresa}</Text>
            <Text style={styles.texto}>Correo : {correo}</Text>
            <Text style={styles.texto}>Telefono de contacto  : {telefono}</Text>

            <Button>
                Eliminar Cliente
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    texto :{
        marginBottom:20,
        fontSize:18
    }
})


export default DetallesCliente