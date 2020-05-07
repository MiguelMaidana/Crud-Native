import React,{useState} from "react"
import {View , StyleSheet} from "react-native"
import {TextInput, Headline,Button,Paragraph,Dialog,Portal} from "react-native-paper"
import globalStyles from "../styles/global"

const NuevoCLiente =()=>{

    // campos Fomularios
   const [nombre,guardarNombre] = useState("")
   const [telefono,guardarTelefono] = useState("")
   const [correo,guardarCorreo] = useState("")
   const [empresa,guardarEmpresa] = useState("")
   const [alerta,guardarAlerta]= useState(false)

   //Guardar Cliente en la BD

   const guardarCliente =()=>{

    // validar 

    if(nombre === "" || telefono === "" || correo === "" || empresa === ""){
        guardarAlerta(true)
        return
    }

    // general el Cliente

    const cliente ={nombre,telefono,correo,empresa}
    console.log(cliente)

    // guardar el Cliente en la API

    // redireccionar 

    //limpiar el Form (opcional)
   }




    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>
            <TextInput
                label="Nombre"
                placeholder="Miguel"
                onChangeText={(texto)=>guardarNombre(texto)}
                value={nombre}
                style={styles.input}
            />
              <TextInput
                label="Telefono"
                placeholder="EJ : 1134434324"
                onChangeText={(texto)=>guardarTelefono(texto)}
                value={telefono}
                style={styles.input}
            />
              <TextInput
                label="Correo"
                placeholder="correo@correo"
                onChangeText={(texto)=>guardarCorreo(texto)}
                value={correo}
                style={styles.input}
            />
              <TextInput
                label="Empresa"
                placeholder="Nombre Empresa"
                onChangeText={(texto)=>guardarEmpresa(texto)}
                value={empresa}
                style={styles.input}
            />

            <Button icon="pencil-circle" mode="contained" onPress={()=>guardarCliente()}>
                GuardarCliente
            </Button>

            <Portal>
                <Dialog
                    visible={alerta}
                    onDismiss={()=>guardarAlerta(false)}
                >
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => guardarAlerta(false)}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
           
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