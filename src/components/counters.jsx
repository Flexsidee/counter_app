import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onReset, onIncrement, onDelete, onDecrement, counters} = this.props;

        return ( 
            <div>
                <button onClick={onReset} className="btn btn-primary m-2">Reset</button>
                {this.props.counters.map(counter => <Counter key={counter.id}  onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} counter={counter} />)}
            </div>
        );
    }
}
 
export default Counters;