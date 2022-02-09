import {CHANGEINPUTVALUE, ADDLISTITEM, DELETEITEM} from "./CONSTANT";

const defaultState = {
    inputValue: 'write ...',
    list: ['data1','data3,']
}
export default (state=defaultState,action)=>{

    if (action.type === CHANGEINPUTVALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.text
        return newState

    }else if(action.type === ADDLISTITEM){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)

        newState.inputValue = ''

        return newState

    }else if (action.type === DELETEITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.idx,1)
        return newState
    }
    return state
}