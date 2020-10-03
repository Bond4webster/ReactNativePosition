import React  from 'react'
import {View,StyleSheet,Text} from 'react-native'


export function Coord (props){
    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Координаты: {props.coords.latitude.toFixed(2) + ', '+props.coords.longitude.toFixed(2)}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Адрес: {props.address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10
    },
    text:{
        fontSize:18,
        color:'#7a7a7a'
    }
})