import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';
import { CheckBox } from 'react-native-elements'
const ItemListaDeListas = ({data, elimina, check}) => {
    return (
        <View style={styles.container}>
            {console.log(data)}
            <CheckBox
                checked={data.checked}
                onPress={() => check(data.key)}
                checkedColor='black'
                uncheckedColor='black'
            />
            <Text style={styles.text}>{data.nombre}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonDelete}
                    onPress = { () => elimina(data.key)}
                >
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ItemListaDeListas;

const styles = StyleSheet.create({
    container: {
        height:'auto',
        width:'100%',
        backgroundColor:'rgb(108, 196, 240)',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'black',
        flex:1,
    },
    text:{
        marginLeft:20,
        width:'55%',
        height:'100%',
        fontSize:18,
        textAlign:'justify',
        alignSelf:'center',
        textAlignVertical:'center',
    },
    buttons:{
        flexDirection:'row',
    },

    buttonDelete:{
        width:50,
        height:'100%',
        marginRight:10, 
        backgroundColor:'rgb(234, 87, 68)',    
        borderRadius:5,
    },
    buttonText:{
        height:'100%',
        alignSelf:'center',
        textAlignVertical:'center',
        fontWeight:'bold',
    },
});
  