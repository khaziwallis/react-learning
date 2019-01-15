import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import Login from './components/Login';

import IUser from './types/IUser';

var data = {
    isAuthed: true,
    name: 'khazi',
    id: 123,
    token: 'khazi123'
};
interface IProps {
    
};
interface IState extends IUser {
    isAuthed: boolean
};

class Routing extends React.Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        let user = localStorage.getItem('user');
        let isAuthed = localStorage.getItem('isAuthed');
        if (user && (isAuthed === 'true')) {
            this.state = {
                user: {
                    isAuthed: true,
                    name: '',
                    id: 123,
                    token: 'khazi'
                },
                isAuthed: true
            }
        } else {
            localStorage.setItem('isAuthed', 'false');
            this.state = {
                user: {
                    isAuthed: false,
                    name: '',
                    id: 123,
                    token: 'khazi'
                },
                isAuthed: false
            };
        }
    }

    logout () {
        alert('called logout....');
        // clear localstorage data
        localStorage.clear();
    }

    login () {
        alert('loggin in functionality....');
        this.state = {
            user: {
                isAuthed: true,
                name: 'khazi',
                id: 123,
                token: '123khazi'
            },
            isAuthed: true
        };
        localStorage.setItem('user', JSON.stringify(this.state.user));
        localStorage.setItem('isAuthed', 'true');
    }

    render() {
        if (localStorage.getItem('isAuthed') === 'true') {
            return (
                <div>
                    <Header user={this.state.user} logout={this.logout.bind(this)} />
                    <Switch>
                        {/* Ensure an exact route match */}
                        <Redirect from="/all" to="/dashboard" />
                        <Redirect from="/list" to="/report" />

                        {/* Routes */}
                        <Route path="/dashboard" component= {() => <Dashboard user={this.state.user} />} />
                        <Route path="/report" component={() => <Report user={this.state.user} />} />}
                        {/* Catch-all */}
                        <Redirect from="/" to="/dashboard" />
                    </Switch>
                </div>
            );
        } else {
            return (
                <Login login={this.login.bind(this)}></Login>
            );
        }
    }   
};

export default Routing;