import React,{useState,useEffect} from "react"
import {View , StyleSheet} from "react-native"
import {TextInput, Headline,Button,Paragraph,Dialog,Portal} from "react-native-paper"
import globalStyles from "../styles/global"
import axios from "axios"

const NuevoCLiente =({navigation,route})=>{


    console.log(route.params)
    const {guardarConsultarApi} = route.params

    // campos Fomularios
   const [nombre,guardarNombre] = useState("")
   const [telefono,guardarTelefono] = useState("")
   const [correo,guardarCorreo] = useState("")
   const [empresa,guardarEmpresa] = useState("")
   const [alerta,guardarAlerta]= useState(false)

   // detectar si estamos editando o no para manipular el formulario.

   useEffect(()=>{
    if(route.params.cliente){
        console.log("estamos editando")
        const {nombre,telefono,correo,empresa} = route.params.cliente
        guardarNombre(nombre)
        guardarTelefono(telefono)
        guardarCorreo(correo)
        guardarEmpresa(empresa)
    }else{
        console.log("nuevo Cliente")
    }
   },[])

   //Guardar Cliente en la BD

   const guardarCliente = async()=>{

    // validar 

    if(nombre === "" || telefono === "" || correo === "" || empresa === ""){
        guardarAlerta(true)
        return
    }

    // general el Cliente

    const cliente ={nombre,telefono,correo,empresa}
    console.log(cliente)

  // si estamos editando o creando un nuevo cliente
        if(route.params.cliente){

            const {id} = route.params.cliente
            cliente.id = id
            const url =`http://192.168.0.10:19001/clientes/${id}`

            //console.log(url)
            try{
                await axios.put(url,cliente)
            }catch(eror){
                console.log(eror)
            }


        }else{
              // guardar el Cliente en la API
                 try{
                     const prueba  =  await axios.post("http://192.168.0.10:19001/clientes",cliente)
         
 
                 }catch(error)
                    {
                    console.log(error)
                    }
 
            }

    // redireccionar 

    navigation.navigate("Inicio")



    //limpiar el Form (opcional)
    guardarNombre("")
    guardarTelefono("")
    guardarCorreo("")
    guardarEmpresa("")

    // cambiar guardarConsultarApi a true para traernos el nuevo cliente 

    guardarConsultarApi(true)
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