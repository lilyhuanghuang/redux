import {CHANGEINPUTVALUE,ADDLISTITEM,DELETEITEM} from "./store/CONSTANT";

export function changeInputValue(text) {
    return {
        type: CHANGEINPUTVALUE,
        text
    }
}
export function addListItem(){
    return {
        type: ADDLISTITEM
    }
}
export function deleteItem(idx){
    return {
        type: 'deleteItem',
        idx
    }
}