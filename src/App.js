import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';
import { render } from '@testing-library/react';
class App extends Component{
  state = {
    counters: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 10}
    ]
  };

  handleIncrement = counter =>{
      const counters = [...this.state.counters];
      const index= counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value ++;
      this.setState({counters});
  };

  handleDecrement = counter =>{
      const counters = [...this.state.counters];
      const index= counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value --;
      this.setState({counters});
  };

  handleDelete = counterId =>{
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters});
  };

  handleReset = () =>{
      const counters = this.state.counters.map(c => {
          c.value= 0;
          return c;
      });
      this.setState({counters});
  };

  render() {
    return (
      <React.Fragment>
        <Navbar 
          totalCounters={this.state.counters.filter(c => c.value >0 ).length}
        />
        <main className='container'>
          <Counters 
            counters = {this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete= {this.handleDelete}
            onReset= {this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
