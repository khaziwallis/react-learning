import React, { Component } from 'react';

interface Props {
  name: string;
  value: string;
  onChange: any;
};

interface State {
  fieldName: string;
  fieldValue: string;
};

class TextBox extends React.Component<Props, State> {
  constructor ( props: Props) {
    super(props);
    this.state = {
      fieldName: props.name,
      fieldValue: props.value
    };
  }
  onChange (event) {
    event.preventDefault();
    let fieldName: string = event.target.name;
    let fieldValue: string = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }
  render () {
    return (
      <input 
        name={this.props.name}
        type='text' 
        value={this.props.value}
        onChange = {this.onChange.bind(this)}/>
    );
  }  
};

export default TextBox;