import React  from 'react'
import {View,StyleSheet,Text,Image} from 'react-native'

export function Weather (props){
    return(
        <View style={styles.weather}>
            <View style={styles.wrap}>
                <Text style={styles.text}>Погода: {props.weather.temp + ' °C, '+props.weather.description}</Text>
            </View>
            <Image
                style={styles.image}
                source={{
                    uri:  props.weather.icon || props.weather.defIcon,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrap:{
        width: '70%',
        justifyContent:'center',
        height:50
    },
    text:{
        fontSize:18,
        color:'#7a7a7a',
    },
    weather:{
        flexDirection:'row',
        marginTop:10
    },
    image:{
        width:'30%'
    }

})