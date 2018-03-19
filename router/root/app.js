import React, {Component, PropTypes, cloneElement} from 'react';
import  {Switch, Route, HashRouter ,Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import NewTab from '../js/tab/index';
import Todolist from '../js/todoList/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const Home = () => <div>
            <h1>react router</h1>
            <ul>
                <li><Link to="/newTab">newTab</Link></li>
                <li><Link to="/todoList">todoList</Link></li>
            </ul>
        </div>;
        return (
            <HashRouter>
                <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/newTab" component={NewTab} />
                <Route path="/todoList" component={Todolist} />
                </Switch>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
