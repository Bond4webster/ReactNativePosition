import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {View,StyleSheet,Text} from 'react-native'
import {TableList} from "../components/TableList";
import {loadInfoArr} from "../store/actions/info";





export const HistoryScreen = (props) =>{

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(loadInfoArr())
    },[dispatch])

    const infoArr = useSelector(state=>state.info.infoArr)
    const dateArr = infoArr.map(e=>e.date);
    const cityArr = infoArr.map(e=>`${e.coords.latitude.toFixed(2)}, ${e.coords.longitude.toFixed(2)}, ${e.address.split(',')[1].toString()}`)
    const viewArr = dateArr.map((e,i)=>[e,cityArr[i]]);

    const openInfo = (index)=>{
        props.navigation.navigate('Info',infoArr[index])
    }

    return (
        <View style={styles.center}>
        {infoArr.length ?
            <TableList
                viewArr={viewArr}
                cityArr={cityArr}
                openInfo={openInfo}
            />
            :
            <View style={styles.emptyArr}><Text style={styles.text}>История пуста</Text></View>
        }
        </View>
    )

}

HistoryScreen.navigationOptions = {
    headerTitle: 'История запросов'

}

const styles = StyleSheet.create({
    center:{
        flex:1
    },
    emptyArr:{
        flex: 1,
        alignItems:'center',
        marginTop:10
    },
    text:{
        fontSize:20,
        color:'#7a7a7a'
    }
})