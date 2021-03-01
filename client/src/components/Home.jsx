import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get('http://localhost:5000/');
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div class='background-glasses'>
        <h1>Cinema IronHack</h1>
        <Link to='/movies'><button style={{  backgroundColor: "white", border: "none", borderRadius: '50%', width:"500px"}} 
        onClick={this.callMyBackend}>Check the movies!</button></Link>
        
      </div>
    );
  }
}
