import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
import store from "./store";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {...store.getState()}
        this.changeState = this.changeState.bind(this)
        this.clickItem = this.clickItem.bind(this)
        store.subscribe(this.changeState)
    }

    changeInputValue(e){
        const action = {
            type: 'changeInputValue',
            text: e.target.value
        }
        store.dispatch(action)
    }
    changeState() {
        this.setState(store.getState())
    }

    clickItem(){
        const action = {
            type: 'addListItem'
        }
        store.dispatch(action)
    }

    deleteItem(idx) {
        const action = {
            type: 'deleteItem',
            idx
        }
        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <div>
                    <Input placeholder={this.state.inputValue} value={this.state.inputValue} style={{width: 250}} onChange={this.changeInputValue}></Input>
                    <Button type="primary" onClick={this.clickItem}>增加</Button>
                </div>
                <div style={{margin: 10,width: 300}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item,idx) => <List.Item onClick={this.deleteItem.bind(this,idx)}>{item}</List.Item>}>
                    </List>
                </div>
            </div>
        );
    }
}

export default TodoList;