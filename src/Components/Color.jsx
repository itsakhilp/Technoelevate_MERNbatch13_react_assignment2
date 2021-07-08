import React, { Component } from 'react'
import './Style.css'

 class Color extends Component {
    
    
    colorChange= ()=> {
    document.body.style.backgroundColor=document.getElementById("background").value;
    }
     
      render() {
      
        return (
            <>
                <select id="background" onChange={this.colorChange}>
                    <option value="" hidden > Select Color </option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="grey">Grey</option>
                </select>
              
            </>
        )
    }
}
export default Color