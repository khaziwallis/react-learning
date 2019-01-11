import React, { Component } from 'react';
import './App.css';
import TextBox from './components/TextBox';

interface IPhone {
  pincode: any;
  number: string;
};

interface IPersonName {
  firstName: string;
  lastName: string;
};

interface IPerson {
  name: IPersonName;
  phone: IPhone;
};

interface IProps {
  person: IPerson;
};

interface IState  {
  form: IPersonName;
};

class App extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);
    this.state = {
      form: {
        firstName: props.person.name.firstName,
        lastName: props.person.name.lastName,
      }
    };
  }
  onSubmit () {
    alert('form submitted....');
  }
  onChange (fieldName: string, fieldValue: string) {
    this.state.form[fieldName] = fieldValue;
    this.setState({form: this.state.form});
  }
  render () {
    return (
      <div>
        <h1>
          Hello Mr, {this.state.form.firstName} {this.state.form.lastName}. this is simple hello world example to understand life cycle of react component.
          <form onSubmit={this.onSubmit}>
            <TextBox name="firstName" value={this.state.form.firstName}
              onChange={this.onChange.bind(this)}/>
            <TextBox name="lastName" value={this.state.form.lastName}
              onChange={this.onChange.bind(this)}/>
            <button type="submit">
              Submit
            </button>
          </form>
        </h1>
      </div>
    );
  }  
}

export default App;
