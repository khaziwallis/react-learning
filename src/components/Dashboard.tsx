import React, { Component } from 'react';

import IUser from '../types/IUser';

interface IProps extends IUser {
};

interface IState {
};

class Dashboard extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
    }
    render() {
        return (
        <div className="App">
            Hello Mr, { this.props.user.name }, am from Dashboard....
        </div>
        );
    }
}

export default Dashboard;
