import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Report from './components/Report';

var data = {
    isAuthed: true,
    name: 'khazi',
    id: 123,
    token: 'khazi123'
};

class Routing extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    {/* Ensure an exact route match */}
                    <Redirect from="/all" to="/dashboard" />
                    <Redirect from="/list" to="/report" />

                    {/* Routes */}
                    <Route path="/dashboard" component= {() => <Dashboard user={data} />} />
                    <Route path="/report" component={() => <Report user={data} />} />}
                    {/* Catch-all */}
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </div>
        );
    }   
};

export default Routing;