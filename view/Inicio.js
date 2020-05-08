import React,{useState,useEffect} from "react"
import {FlatList, View} from "react-native"
import axios from "axios"
import {List, Headline, Button,FAB} from "react-native-paper"
import globalStyles from "../styles/global"

const Inicio =({navigation})=>{

    const [clientes,guardarClientes] = useState([])
    const [consultarApi, guardarConsultarApi] = useState(true)

    useEffect(()=>{

        const obtnerClientesApi = async () =>{
            try{
                const resultado = await axios.get("http://192.168.0.10:19001/clientes")
                guardarClientes(resultado.data)
                guardarConsultarApi(false)
            }catch(error){
                console.log(error)
            }
        }
        if (consultarApi){
        obtnerClientesApi()
        }

    },[consultarApi])
    return (
        <View style={globalStyles.contenedor}>
            <Button icon={"plus-circle"} onPress={()=> navigation.navigate("NuevoCliente",{guardarConsultarApi})}>
                Nuevo Cliente
            </Button>
            <Headline style={globalStyles.titulo}>{clientes.length > 0 ? "Clientes" : " Aun no hay clientes"}</Headline>

            <FlatList
                data={clientes}
                keyExtractor={cliente => (cliente.id)}
                renderItem={({item})=>(
                    <List.Item
                        title={item.nombre}
                        description={item.empresa}
                        onPress={()=> navigation.navigate("DetallesCliente",{item,guardarConsultarApi})}
                    />
                )}
            />
            <FAB
                icon="plus"
                style={globalStyles.fab}
                onPress={()=> navigation.navigate("NuevoCliente",{guardarConsultarApi})}
            >

            </FAB>
        </View>
    )
}

export default Inicio