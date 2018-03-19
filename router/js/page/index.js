import React, {Component, PropTypes, cloneElement} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import * as Routes from '../../routes/index';
export class Page extends Component {
    constructor(props) {
        super(props);
        this.state={
        };
    }
    render() {
        const LinkWithSubRoutes = (route) => {
            if (route.routes){
                return (
                    <ul>
                    {route.routes.map((_route, i) => {
                        var pathname=_route.path.split('/')[2];
                            return (pathname!=="index" ? <li key={i}><Link to ={_route.path}>{pathname}</Link> </li> : "");
                    })}
                    </ul>
                );
            }else{
                return (
                    <li><Link to ={route.path}/></li>
                );
            }
        };
        return (
            <div className="index-layout">
                <div>
                    <h3>练习小栗子</h3>
                    {Routes.route.map((route, i) => {
                        return (<LinkWithSubRoutes key={i} {...route}/>);
                    })}
                </div>
            </div>
        );
    }
}