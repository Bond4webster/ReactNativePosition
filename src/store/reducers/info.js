import {ADD_INFO, LOAD_INFO_ARR, REMOVE_INFO} from "../types";

const initialState = {
    infoArr:[]
}




export const infoReducer = (state = initialState,action)=>{
    switch (action.type){
        case LOAD_INFO_ARR: return {...state,infoArr: action.payload}
        case REMOVE_INFO: return {...state,infoArr: state.infoArr.filter(info=>info.date !== action.payload)}
        case ADD_INFO: return {
            ...state,
            infoArr:[ ...state.infoArr,{...action.payload}]
        }
        default:return state
    }
}