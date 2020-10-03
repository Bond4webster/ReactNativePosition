import React from 'react'
import {View,StyleSheet,Button,Alert} from 'react-native'
import {Coord} from "../components/Coord";
import {Weather} from "../components/Weather";
import {Date} from "../components/Date";
import {useDispatch} from "react-redux";
import {removeInfo} from "../store/actions/info";

export const InfoScreen = (props) =>{
    const obj = props.navigation.state.params
    const dispatch = useDispatch()
    const removeHandler = () =>{
       Alert.alert(
           'Удаление местоположения',
           'Вы точно хотите удалить местоположение?',
           [
               {
                   text:'Отменить',
                   style:'cancel'
               },
               {
                   text:'Удалить',
                   style:'destructive',
                   onPress(){
                       props.navigation.navigate('History')
                       dispatch(removeInfo(obj.date))
                   }
               }
           ],
           {cancelable:false}
       )
    }

    return (
        <View style={styles.center}>
            <View style={styles.wrap}>
                <Date
                    date={obj.date}
                />
                <Coord
                    coords={obj.coords}
                    address={obj.address}
                />
                <Weather
                    weather={obj.weather}
                />
            </View>
            <View style={styles.btn}>
                <Button  color={'red'} title='Удалить' onPress={removeHandler}/>
            </View>

        </View>
    )
}
InfoScreen.navigationOptions = {
    headerTitle: `Информация`,
    headerTruncatedBackTitle:'Назад'
}

const styles = StyleSheet.create({
    center:{
        flex:1,
        marginTop: 10,
        textAlign:'center',
        backgroundColor:'#FFF',
        marginHorizontal:5
    },
    wrap:{
        paddingHorizontal:5,
        borderWidth:2,
        borderColor:'#7a7a7a'
    },
    btn:{
        marginTop: 10,

        alignItems:'center',
        justifyContent:'center'
    }
})