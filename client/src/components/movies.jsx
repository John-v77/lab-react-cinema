import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

function Movies(props) {

  const style1 ={
    display: "flex",
    justifyContent: "space-around",
  }

  const styleColumn ={
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }

  let[moveS, setMovieS] = useState([])

  const axio = axios.get('url')
                .then(res => {
                  // console.log
                  setMovieS(res.data)
                })
                
useEffect(() => {axio}, [])



  const showMovies = () => {
    Array.map(eachElemen => {
      <div></div>
    })
  }
  return (
    <div>
        <div style={style1}>
          <div style={styleColumn}></div>
                  <div sytle={{width:"230px", height:"350px"}}>
                    <img src={eachElemen.image} alt="picture movie"/>
                  </div>
                        <div>
                          <p>{eachElemen.title}</p>
                        </div>
                  <div>
                  <Link to='/movieInfo'>See more</Link>
                  </div>
        </div>


        <div style={{display="flex",justifyContent="space-around"}} >

        </div>
    </div>
  );
}

export default Movies;