import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Button  } from 'react-native';
import MiModal from './MiModal';
const FormNuevaLista = ({add, count}) => {
    const [nombreLista, setNombreLista] = useState('');
    const [muestraModal, setMuestraModal] = useState(false);
    const [mensajeModal, setMensajeModal] = useState('');
    const [contador, setContador] = useState(0);
    const tryAdd = () => {
        let count = 1 + contador;
        if (nombreLista.length<=0) {
            setMuestraModal(true);
            setMensajeModal('Por favor escribe un nombre para la lista')
            return null;
        }
        if (nombreLista.length>35) {
            setMuestraModal(true);
            setMensajeModal('El nombre de la lista debe ser menor a 35 caracteres')
            return null;
        }
        add({
            nombre: nombreLista,
            key: count,
        });
        setContador(count);
        setNombreLista('');
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value = {nombreLista} onChangeText = { newText => setNombreLista(newText)} />
            <TouchableOpacity  style={styles.button}
                onPress = { () => tryAdd() }
            ><Text style={styles.buttonText}>AÑADIR</Text></TouchableOpacity>
            <MiModal muestraModal={muestraModal} setMuestraModal={setMuestraModal} mensajeModal={mensajeModal} />
        </View>
    )
}
export default FormNuevaLista;
const styles = StyleSheet.create({
    container:{
        height:200,
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        borderColor:'grey',
        backgroundColor:'rgb(236, 236, 236)',
        borderWidth:1,
        borderRadius:4,
        paddingLeft:10,
        width:'60%',
    },
    button:{
        width:'60%',
        backgroundColor:'rgb(16, 144, 218)',
        borderRadius:4,
        padding:6,
        marginTop:10,
    },
    buttonText:{
        color:'rgb(236, 236, 236)',
        fontWeight:'bold',
        textAlign:'center',
    },
    containerModal:{
        flex:1,
        alignItems:'stretch',
        justifyContent:'center',
        backgroundColor:'rgba(0,0,0,0.3)',
    },
    cuadroModal:{
        backgroundColor:'#eee',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:250,
        marginBottom:250,
        marginLeft:50,
        marginRight:50,
        borderRadius:5,
        padding:10,
    },
    textModal:{
        fontSize:20,
        color:'black',
        flex:1,
        textAlignVertical:'center'
    }
  });
  