import { StyleSheet, Text, View, FlatList, TouchableOpacity  } from 'react-native';
import ItemLista from './ItemLista';
const ListaDeListas = ({ dataLista, elimina, check }) => {
    return (
        <View>
            <FlatList
                data={dataLista}
                renderItem={({item}) => 
                        <ItemLista key = {item.key} data = {item} elimina = {elimina} check = {check}/>
                }
            />
        </View>
    )
}
export default ListaDeListas;