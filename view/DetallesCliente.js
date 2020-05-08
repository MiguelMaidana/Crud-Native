import React from "react"
import {View , StyleSheet, Alert} from "react-native"
import {Headline, Text, Button, FAB} from "react-native-paper"
import globalStyles from "../styles/global"
import axios from "axios"

const DetallesCliente =({navigation,route})=>{
    
    const {guardarConsultarApi} = route.params
    const {nombre,telefono,correo,empresa,id} = route.params.item

    const mostrarConfirmacion=()=>{
        Alert.alert(
            "¿Deseas eliminar este cliente?",
            "Una vez eliminado el contacto , no se puede recuperar",
            [
                {text :'Si, Eliminar', onPress : ()=> eliminarContacto()},
                {text : "Cancelar", style : "cancel"}
            ]
        )
    }

    const eliminarContacto = async ()=>{
        //console.log("elimianndo",id)
        const url = `http://192.168.0.10:19001/clientes/${id}`
        //console.log(url)
        try{
            await axios.delete(url)
        }catch(error){
            console.log(error)
        }

        // redireccionar 

        navigation.navigate("Inicio")
        // volver a consultar la API

        guardarConsultarApi(true)

    }

    
    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>{nombre}</Headline>
            <Text style={styles.texto}>Empresa : {empresa}</Text>
            <Text style={styles.texto}>Correo : {correo}</Text>
            <Text style={styles.texto}>Telefono de contacto  : {telefono}</Text>

            <Button style={styles.boton} mode="contained" icon="cancel" onPress={()=>mostrarConfirmacion()}>
                Eliminar Cliente
            </Button>

            <FAB
                icon="pencil"
                style={globalStyles.fab}
                onPress={()=> navigation.navigate("NuevoCliente",{cliente : route.params.item,guardarConsultarApi})}
            >

            </FAB>
        </View>
    )
}

const styles = StyleSheet.create({
    texto :{
        marginBottom:20,
        fontSize:18
    },
    boton :{
        marginTop:100,
        backgroundColor:"red"
    }
})


export default DetallesCliente