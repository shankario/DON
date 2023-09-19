
 import React from 'react';

 class ClassState extends React.Component {
    constructor(){
        super();
        this.state={
            counter:0,
        }
    }

    increment(){
        this.setstate({
            counter:this.state.counter +1,
        })
    }
    render(){
        return(
            <div>
                <h3>count value is:{this.state.counter}</h3>
                <button onClick={()=>this.increment()}increment value></button>
            </div>
        );
    }
}

export default ClassState;