import React,{useState,useEffect} from "react"
import {Text , StyleSheet, FlatList, View} from "react-native"
import axios from "axios"
import {List, Headline} from "react-native-paper"
import globalStyles from "../styles/global"

const Inicio =()=>{

    const [clientes,guardarClientes] = useState([])

    useEffect(()=>{

        const obtnerClientesApi = async () =>{
            try{
                const resultado = await axios.get("http://192.168.0.10:19001/clientes")
                guardarClientes(resultado.data)
            }catch(error){
                console.log(error)
            }
        }
        obtnerClientesApi()

    },[])
    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>{clientes.length > 0 ? "Clientes" : " Aun no hay clientes"}</Headline>

            <FlatList
                data={clientes}
                keyExtractor={cliente => (cliente.id)}
                renderItem={({item})=>(
                    <List.Item
                        title={item.nombre}
                        description={item.empresa}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})


export default Inicio