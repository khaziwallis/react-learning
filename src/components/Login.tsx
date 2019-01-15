import React, { Component } from 'react';

import IUser from '../types/IUser';

interface IProps {
    login: any
};

interface IState extends IUser {
};

class Login extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
    }
    login() {
        //this.props.login();
    }
    render() {
        return (
        <div className="App" onClick={this.props.login}>
            click to login...
        </div>
        );
    }
}

export default Login;
