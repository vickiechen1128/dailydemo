import React, {Component, PropTypes, cloneElement} from 'react';

export default class ListInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:null
        };
        this.textChange = this.textChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    textChange(e) {
        this.setState({text: e.target.value});
    }
    addItem(){
        const{allItem}=this.props;
        const{text}=this.state;
        if(text.length>0){
            allItem.push(text);
            this.props.handleAdd(allItem);}
    }
    render() {
        return (
            <div>
                <input type='text' onChange={this.textChange}/>
                <button onClick={this.addItem}>add</button>
            </div>
        );
    }
}

