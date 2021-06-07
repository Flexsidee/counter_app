import React, { Component } from 'react';

class Counter extends Component {    
    render() { 
        return (
            <div className='row'>
                <div className="col-sm-1">
                    <span className={this.getBadgeColor()} >{this.formatCount()}</span>    
                </div>
                <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)}  
                            className="btn btn-secondary btn-sm"> + 
                    </button>
                    <button className="btn btn-secondary btn-sm m-2" 
                            onClick={() =>this.props.onDecrement(this.props.counter)} disabled={(this.props.counter.value === 0) ? 'disabled' : ''} > - 
                    </button>
                    <button onClick={() => this.props.onDelete(this.props.counter.id)} 
                            className="btn btn-danger btn-sm"> X
                    </button>
                </div>
            </div>
        );
    }

    //this method is used to handle change in color of the current count
    getBadgeColor() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }
    formatCount(){
        const {value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;