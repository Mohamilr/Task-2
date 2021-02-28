import React , { lazy, Suspense } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
const Signup = lazy(() => import('../pages/signup.page'));
const Login = lazy(() => import('../pages/login.page')) ;


const Routes = () => {
        return(
            <Suspense fallback='loading'>
            <Router>
            <Switch>
             <Route exact path='/' component={Signup} />
             <Route exact path='/login' component={Login} />
             </Switch>
            </Router>
            </Suspense>
        );
}

export default Routes;