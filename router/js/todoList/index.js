import React, {Component, PropTypes, cloneElement} from 'react';
import ReactDOM from 'react-dom';
import ListInput from './listInput';
import ListContext from './listContext';
export  class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state={
            allItem:['reading','sleeping']
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(newAllItem){
        this.setState({
            allItem:newAllItem
        });
    }
    render() {
        const{allItem}=this.state;
        return (
            <div>
                <ListInput handleAdd={this.handleChange} allItem={allItem}/>
                <ListContext allItem={allItem} handleDelete={this.handleChange} />
            </div>
        );
    }
}

