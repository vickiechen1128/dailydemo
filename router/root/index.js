import React, {Component, PropTypes, cloneElement} from 'react';
import  {Switch, Route, HashRouter ,Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import * as Routes from '../routes/index';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const RouteWithSubRoutes = (route) => {
            return (
                <Route path={route.path} exact={route.exact} render={(props) => {
                    if (route.routes) {
                        return (
                            <route.component {...props}>
                                {route.routes.map((_route, i) => {
                                    return (<RouteWithSubRoutes key={i} {..._route}/>);
                                })}
                            </route.component>
                        );
                    } else {
                        return (
                            <route.component {...props}/>
                        );
                    }
                }}/>
            );
        };

        return (
            <HashRouter>
                <Switch>
                    {Routes.route.map((route, i) => {
                        return (<RouteWithSubRoutes key={i} {...route}/>);
                    })}
                </Switch>
            </HashRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
