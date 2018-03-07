import React, {Component, PropTypes, cloneElement} from 'react';

export default class ListContext extends Component {
    constructor(props) {
        super(props);
        this.deleteItem=this.deleteItem.bind(this);
    }
    deleteItem(e){
        let key=e.target.getAttribute('data-index');
        const{allItem}=this.props;
        allItem.splice(key,1);
        this.props.handleDelete(allItem);
    }
    render() {
        const {allItem} = this.props;
        return (
            <ul>
                {allItem.map((item,key)=>{
                    return <li key={key} >{item}
                    <button onClick={this.deleteItem} data-index={key} >delete</button>
                    </li>})}
            </ul>
        );
    }
}

