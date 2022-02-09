import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Input,Button,List} from 'antd'
class TodoListUI extends Component {

    constructor(props) {
        super(props);
        console.log(props,'dd')

    }



    render() {
        return (
            <div>
                <div>
                    <Input value={props.value} style={{width: 250}} onChange={props.changeInputValue}></Input>
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

export default TodoListUI;