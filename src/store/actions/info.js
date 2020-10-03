import {ADD_INFO, LOAD_INFO_ARR, REMOVE_INFO} from "../types";
import axios from 'axios'

export const loadInfoArr = ()=>{
    return async dispatch =>{
       await axios.get('https://positiondb.firebaseio.com/infoarr.json').then(res=>{
           try {
               const keys = Object.keys(res.data)
               const payload = keys.map(e=>res.data[e])
               dispatch({
                   type: LOAD_INFO_ARR,
                   payload
               })
           }catch (e){
               console.log(e)
           }
       }
       )
    }
}

export const removeInfo = id => {
    return async dispatch => {
        await axios.get('https://positiondb.firebaseio.com/infoarr.json').then(res=>{
            const keys = Object.keys(res.data)
            const listInfo = keys.map(e=>res.data[e])
            const listWithKey = listInfo.map((val,ind)=> {
                return {...
                    val, key:keys[ind]
                }
            })
            const delInfo =listWithKey.find((e)=>{
                if(e.date == id){
                    return e
                }
            })
            axios.delete(`https://positiondb.firebaseio.com/infoarr/${delInfo.key}.json`).then(() => {
                dispatch({
                    type: REMOVE_INFO,
                    payload: id
                })
            })
        })

    }
}

export const addInfo = info =>{
    return async dispatch =>{
        await axios.post('https://positiondb.firebaseio.com/infoarr.json',info).then(res=>{
            dispatch({
                type: ADD_INFO,
                payload:info
            })
        })
    }

}