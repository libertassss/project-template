
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './page/index';

const Root = () => {
    return <> 
    <Switch>
        <Route path="/home" exact={true} component={Home}></Route>  
        <Redirect path="/" to='home'></Redirect>
    </Switch>   
    </>
}

export default Root;

