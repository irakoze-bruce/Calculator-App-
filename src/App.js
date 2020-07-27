/** @format */

import React, { Component } from "react";

import "./App.css";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import * as math from "mathjs";

export default class App extends Component {
  state = {
    input: "",
  };

  addInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  equalHandle = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };
  render() {
    return (
      <div className='App'>
        <div className='calc-wrapper'>
          <Input input={this.state.input} />
          <div className='row'>
            <Button handleClick={this.addInput}>7</Button>
            <Button handleClick={this.addInput}>8</Button>
            <Button handleClick={this.addInput}>9</Button>
            <Button handleClick={this.addInput}>/</Button>
          </div>

          <div className='row'>
            <Button handleClick={this.addInput}>4</Button>
            <Button handleClick={this.addInput}>5</Button>
            <Button handleClick={this.addInput}>6</Button>
            <Button handleClick={this.addInput}>*</Button>
          </div>

          <div className='row'>
            <Button handleClick={this.addInput}>1</Button>
            <Button handleClick={this.addInput}>2</Button>
            <Button handleClick={this.addInput}>3</Button>
            <Button handleClick={this.addInput}>+</Button>
          </div>

          <div className='row'>
            <Button handleClick={this.addInput}>.</Button>
            <Button handleClick={this.addInput}>0</Button>
            <Button handleClick={() => this.equalHandle()}>=</Button>
            <Button handleClick={this.addInput}>-</Button>
          </div>
          <div className='row'>
            <Button
              handleClick={() => {
                this.setState({ input: "" });
              }}
            >
              clear
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
