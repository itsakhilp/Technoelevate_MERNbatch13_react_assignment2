import React, { Component } from 'react'
import withCounter from './withCounter'
import './Style.css'

 class Node extends Component {
    
    render() {
        let {count, increment} = this.props
 
         return (
             
            <>
           

            <div id="third">
                <p>{count}</p>
                <h3>Node</h3>
                <button onClick={increment}>Click here</button>
            </div>
            </>
         )
     }
}
export default withCounter(Node)