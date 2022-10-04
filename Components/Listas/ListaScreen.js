import { useEffect, useState } from 'react';


import { StyleSheet, Text, View, Button } from 'react-native';
import Titulo from '../Titulo';
import FormNuevoElemento from './FormNuevoElemento';
import Lista from './Lista';
const ListaScreen = ({data, close, actualiza, count, setCount}) => {
    console.log('Render ListaScreen');
    const [nombreLista, setNombreLista] = useState('');
    const [listaActual, setListaActual] = useState([]);

    useEffect(()=>{
        setNombreLista(data.nombre);
        setListaActual(data.data.data);
    },[data]);

    useEffect(()=>{
        actualiza(data.data.key, listaActual);
    },[listaActual])

    const handleNuevoElemento = (elemento) => {
        setListaActual(
            listaActual.concat(elemento)
        );
        actualiza(data.data.key);
    }
    const handleDeleteElemento= (key) => {
        let tempListaActual = listaActual.map( item  => item);
        for (let index = 0; index < tempListaActual.length; index++) {
            if (tempListaActual[index].key === key) {
                tempListaActual.splice(index, 1);
            }
        }
        setListaActual(tempListaActual);
    }
    const handleCheck = (key) => {
        let tempListaActual = listaActual.map( item  => item);
        for (let index = 0; index < tempListaActual.length; index++) {
            if (tempListaActual[index].key === key) {
                tempListaActual[index].checked = !tempListaActual[index].checked;
            }
        }
        setListaActual(tempListaActual);
    }
    console.log('Contador de elementos ', count);
    return (
        <View style={styles.container}>
            <Titulo>Lista {nombreLista}</Titulo>
            <Button title='Regresar' onPress={()=>close()}/>
            <FormNuevoElemento add = {handleNuevoElemento} count = {count} setCount = {setCount}/>
            <Lista dataLista = {listaActual} elimina = {handleDeleteElemento} check = {handleCheck}/>
        </View>
    )
}
export default ListaScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'background-color: rgb(206, 232, 245)',
        flex:1,
    },
  });
  