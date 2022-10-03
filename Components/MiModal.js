import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, Button  } from 'react-native';

const MiModal =({muestraModal, setMuestraModal, mensajeModal})=>{
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={muestraModal}
        >
            <View style={styles.containerModal} >
                <View style={styles.cuadroModal}>
                    <Text style={styles.textModal} >{mensajeModal}</Text>
                    <Button title='Cerrar' onPress = { () => setMuestraModal(false)}/>
                </View>
            </View>
        </Modal>
    )
}
export default MiModal;

const styles = StyleSheet.create({
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
  