import React, {Component}from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './Component/Home/Home'
import Layout from './hoc/Layout/layout'

class Routes extends Component{
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path = '/' component = {Home}/>
                </Switch>
            </Layout>
        )
    }

}

export default Routes