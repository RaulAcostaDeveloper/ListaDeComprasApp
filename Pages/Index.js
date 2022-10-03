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
        let nombreLista = listasDeListas.map((e)=>{
            if (e.key === key) {
                return e.nombre;
            }
        });
        let tempListaActual = listas.map(e=>{ //Genera un array... quiero un objeto solo
            if (e.key === key) {
                return {
                    data: e.data,
                    key: e.key,
                };
            }
        });
        tempListaActual = { //Normalizo a un objeto
            data: tempListaActual[0].data,
            key: tempListaActual[0].key,
        }
        setListaActual({
            nombre: nombreLista,
            data: tempListaActual,
        });
        setMuestraListaScreen(true);
    }
    const handleActualizaListas = (key, listaActualizada) => {
        console.log('Actualiza la lista ', key, listaActualizada);
        let tempListas = listas.map(e=>{
            if (e.key === key) {
                return {
                    key: e.key,
                    data: listaActualizada,
                }
            }
        });
        console.log('Lista actualizada ', tempListas);
        setListas(tempListas);
    }
    return (
        <View style={styles.container}>
            {muestraListaScreen == false &&
            <>
                <Titulo>Lista de compras App</Titulo>
                <FormNuevaLista add = {handleNuevaListaDeListas}/>
                <ListaDeListas dataListas = {listasDeListas}  elimina = {handleDeleteListaDeListas} open = {handleOpenLista}/>
            </>
            }

            { muestraListaScreen && <ListaScreen data = {listaActual} actualiza = {handleActualizaListas} close = {()=>setMuestraListaScreen(false)}/>}
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
  