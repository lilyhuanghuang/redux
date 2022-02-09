const defaultState = {
    inputValue: 'write ...',
    list: ['data1','data3,']
}
export default (state=defaultState,action)=>{

    if (action.type === 'changeInputValue'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.text
        return newState

    }else if(action.type === 'addListItem'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)

        newState.inputValue = ''

        return newState

    }else if (action.type === 'deleteItem') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.idx,1)
        return newState
    }
    return state
}