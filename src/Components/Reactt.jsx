import React, { Component } from 'react'
import withCounter from './withCounter'
import './Style.css'

 class Reactt extends Component {
    
    render() {
        let {count, increment} = this.props
 
         return (
             
            <>
            <h1>Vote</h1>

            <div id="first">
                <p>{count}</p>
                <h3>React</h3>
                <button onClick={increment}>Click here</button>
            </div>
            </>
         )
     }
}
export default withCounter(Reactt)