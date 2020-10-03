import React  from 'react'
import {View,StyleSheet} from 'react-native'
import MapView, {Marker} from "react-native-maps"




export function Map (props){
        return(
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: props.coords.latitude,
                        longitude:props.coords.longitude,
                        latitudeDelta:0.015,
                        longitudeDelta:0.0121
                    }}
                >
                    <Marker coordinate={props.coords}/>
                </MapView>
            </View>
        )
}

const styles = StyleSheet.create({
    container:{
        height: '65%',
        marginTop:10
    },
    map:{
        height:'100%',
        borderWidth:1,
        borderColor:'#7a7a7a'
    }
})