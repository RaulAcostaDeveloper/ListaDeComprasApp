import { StyleSheet, Text, View, FlatList, TouchableOpacity  } from 'react-native';
import ItemListaDeListas from './ItemListaDeListas';
const ListaDeListas = ({ dataListas, elimina, open }) => {
    return (
        <View>
            <FlatList
                data={dataListas}
                renderItem={({item}) => 
                        <ItemListaDeListas key = {item.key} data = {item} elimina = {elimina} open = {open}/>
                }
            />
        </View>
    )
}
export default ListaDeListas;