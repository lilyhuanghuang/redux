import React, {Component} from 'react';
import 'antd/dist/antd.css'
import TodoListUI from "./TodoListUI";
import store from "./store";
import {addListItem} from "./action";
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {...store.getState()}
        this.changeState = this.changeState.bind(this)
        this.clickItem = this.clickItem.bind(this)
        store.subscribe(this.changeState)
    }

    changeInputValue(e){
        const action = changeInputValue(e.target.value)
        store.dispatch(action)
    }
    changeState() {
        this.setState(store.getState())
    }

    clickItem(){
        const action = addListItem()
        store.dispatch(action)
    }

    deleteItem(idx) {
        const action = deleteItem(idx)
        store.dispatch(action)
    }
    render() {
        return (
            <TodoListUI
                value={this.state.inputValue}
                changeInputValue={this.changeInputValue}
            />
        )
    }
}

export default TodoList;