import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Titulo from '../Components/Titulo';
import FormNuevaLista from '../Components/FormNuevaLista';
import ListaDeListas from '../Components/ListaDeListas';
import ListaScreen from '../Components/Listas/ListaScreen';
const Index = () => {
    const [listasDeListas, setListasDeListas] = useState([]); //Títulos de las listas
    const [listaActual, setListaActual] = useState({}); //Lista que se va a mostrar
    const [listas, setListas] = useState([]); //Array con todas las listas
    const [muestraListaScreen, setMuestraListaScreen] = useState(false);//Muestra la lista que se va a mostrar
    const [contadorListas, setContadorListas] = useState(0); //Contador de listas, nunca se cierra este componente superior
    const [contadorElementos, setContadorElementos] = useState(0); //Contador de elementos, es general el contador de elementos, no por listas individuales

    const handleNuevaListaDeListas = (elemento) => {
        setListasDeListas(
            listasDeListas.concat(elemento)
        );
        setListas(listas.concat({
            key: elemento.key,
            data: [],
        }))
    }
    const handleDeleteListaDeListas = (key) => {
        let tempListaDeListas = listasDeListas.map( item  => item);
        for (let index = 0; index < tempListaDeListas.length; index++) {
            if (tempListaDeListas[index].key === key) {
                tempListaDeListas.splice(index, 1);
            }
        }
        setListasDeListas(tempListaDeListas);
        let tempListas = listas.map( item => item);
        for (let index = 0; index < tempListas.length; index++) {
            if (tempListas[index].key === key) {
                tempListas.splice(index, 1);
            }
        }
        setListas(tempListas);
    }
    const handleOpenLista = (key) => {
        console.log('Open lista ', key);
        let nombreLista;
        for (let index = 0; index < listasDeListas.length; index++) {
            if (listasDeListas[index].key === key) {
                nombreLista = listasDeListas[index].nombre;
            }
        }
        let tempListaActual;
        for (let index = 0; index < listas.length; index++) {
            if (listas[index].key === key) {
                tempListaActual = {
                    data: listas[index].data,
                    key: listas[index].key,
                };
            } 
        }
        console.log('Open lista, tempListaActual ', tempListaActual);
        setListaActual({
            nombre: nombreLista,
            data: tempListaActual,
        });
        setMuestraListaScreen(true);
    }
    const handleActualizaListas = (key, listaActualizada) => {
        console.log('Actualiza la lista ', key, listaActualizada);
        let tempListas = listas.map(e=>e);
        for (let index = 0; index < tempListas.length; index++) {
            if (tempListas[index].key === key) {
                tempListas[index] = {
                    data: listaActualizada,
                    key: tempListas[index].key,
                };
            } 
        }
        console.log('Lista actualizada ', tempListas);
        setListas(tempListas);
    }
    return (
        <View style={styles.container}>
            {muestraListaScreen == false &&
            <>
                <Titulo>Lista de compras App</Titulo>
                <FormNuevaLista add = {handleNuevaListaDeListas} count = {contadorListas} setCount = {setContadorListas}/>
                <ListaDeListas dataListas = {listasDeListas}  elimina = {handleDeleteListaDeListas} open = {handleOpenLista}/>
            </>
            }

            { muestraListaScreen && <ListaScreen data = {listaActual} actualiza = {handleActualizaListas} close = {()=>setMuestraListaScreen(false)} count = {contadorElementos} setCount = {setContadorElementos}/>}
        </View>
    )
}
export default Index;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'background-color: rgb(206, 232, 245)',
        flex:1,
    },
});
  