import React, { Component } from 'react'
import withCounter from './withCounter'
import './Style.css'

 class Angular extends Component {
    
    render() {
        let {count, increment} = this.props
 
         return (
             
            <>
           

            <div id="second">
                <p>{count}</p>
                <h3>Angular</h3>
                <button onClick={increment}>Click here</button>
            </div>
            </>
         )
     }
}
export default withCounter(Angular)