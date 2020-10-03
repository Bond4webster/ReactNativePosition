import React  from 'react'
import {View,StyleSheet,Text} from 'react-native'


export function Date (props){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Дата: {props.date}</Text>
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