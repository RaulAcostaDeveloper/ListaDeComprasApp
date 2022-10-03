import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity  } from 'react-native';

const ItemListaDeListas = ({data, elimina, open}) => {
    const [name, setName] = useState('');
    useEffect(()=>{
        setName(data.nombre)
    },[data]);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{name}</Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonVer}
                    onPress = { () => open(data.key)}
                >
                    <Text style={styles.buttonText}>Ver</Text>
                </TouchableOpacity>
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
        width:'100%',
        backgroundColor:'rgb(108, 196, 240)',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:'black',
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
    buttonVer:{
        width:50,
        height:50,
        marginRight:10, 
        backgroundColor:'rgb(16, 144, 218)',  
        borderRadius:5,
    },
    buttonDelete:{
        width:50,
        height:50,
        marginRight:10, 
        backgroundColor:'rgb(234, 87, 68)',    
        borderRadius:5,
    },
    buttonText:{
        height:'100%',
        alignSelf:'center',
        textAlignVertical:'center',
        fontWeight:'bold',
    }
});
  