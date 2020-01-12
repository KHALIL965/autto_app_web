import React, { Component } from 'react';

import {authRoutes} from '../../navigation/routes';

import {Route, Switch} from 'react-router-dom';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


class AuthLayout extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    getRoutes=(routes, props)=>{
        return routes.map( (item,index)=>{
            if(item.layout==="/auth"){
                return(
                    <Route
                    path={item.layout+item.path}
                    component={item.component}
                    key={index}
                    {...props}
                    />
                )
            }
        })
    }

    render() {
        return (
            <main>
                <div class="main-content common-main">
                    <div class="form-block max-WT-600 pt40 block-center">
                        <div class="form-main">
                            {/* child routes here */}
                            <Switch>
                                {this.getRoutes(authRoutes, this.props)}
                            </Switch>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
    
}

const mapStateToProps=state=>{
    console.log("State_on_AuthLayout=> ",state);
    return state;
}

export default connect(mapStateToProps)(AuthLayout);