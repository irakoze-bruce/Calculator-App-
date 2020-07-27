/** @format */

import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    input: "",
  };

  addToPut = (val) => {
    this.setState({ input: this.state.input + val });
    console.log(val);
  };

  render() {
    return (
      <div className='App'>
        <div className='calc-wrapper'>
          <Input input={this.state.input}></Input>
          <div className='row'>
            <Button handleClick={this.addToPut}>7</Button>
            <Button handleClick={this.addToPut}>8</Button>
            <Button handleClick={this.addToPut}>9</Button>
            <Button handleClick={this.addToPut}>/</Button>
          </div>

          <div className='row'>
            <Button handleClick={this.addToPut}>4</Button>
            <Button handleClick={this.addToPut}>5</Button>
            <Button handleClick={this.addToPut}>6</Button>
            <Button handleClick={this.addToPut}>*</Button>
          </div>

          <div className='row'>
            <Button handleClick={this.addToPut}>1</Button>
            <Button handleClick={this.addToPut}>2</Button>
            <Button handleClick={this.addToPut}>3</Button>
            <Button handleClick={this.addToPut}>+</Button>
          </div>

          <div className='row'>
            <Button handleClick={this.addToPut}>.</Button>
            <Button handleClick={this.addToPut}>0</Button>
            <Button handleClick={() => this.equalHandle()}>=</Button>
            <Button handleClick={this.addToPut}>-</Button>
          </div>
        </div>
      </div>
    );
  }
}
