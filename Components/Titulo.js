import { StyleSheet, Text, View } from 'react-native';

const Titulo = ({children}) => {
    return (
        <View style={styles.titulo}>
            <Text style={styles.text}>{children}</Text>
        </View>
    )
}
export default Titulo;
const styles = StyleSheet.create({
    titulo: {
        alignItems:'center',
        height:100,
        justifyContent:'center',
    },
    text:{
        fontWeight:'bold',
        fontSize:25,
        color:'color: rgb(12, 82, 32)'
    }
  });
  