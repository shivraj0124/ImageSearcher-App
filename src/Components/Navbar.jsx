import {Link} from 'react-router-dom'
import React, { useState } from 'react'
import PhotoHook  from './Photocontext'
import axios from 'axios'

function Navbar() {
    
    const {photo,searchPhoto} = PhotoHook()
    const { result, changeresult } = PhotoHook();
    const {nofound,changenoFound}=PhotoHook()

    const handleOnclick = () => {

        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=Qgyk1bDc4H6zoBstQnkLaj3vai6MFu7GzkZgBHkEq7A`)
            .then((response) => {
                console.log(response);
                changeresult(response.data.results)
                console.log(result);
                changenoFound(false)
                if(response.data.results?.length === 0 ){
                    alert("no data found")
                }else{
                   
                }
            })
            

        let ele = document.querySelector('#searchInput')
        if(ele.value === ""){
            alert('Enter something')           
        }
             
    }

  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor:'#87C0CD',color:'#fff'}}>
              <div className="container-fluid">
                  <Link className="navbar-brand" to="/"><h4>ImgGallery</h4></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                              <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link className="nav-link" to='/about'>About</Link>
                          </li>
                     </ul>
                      <form className="d-flex me-4">
                          <input className="form-control me-2" type="search" id='searchInput' placeholder="Search" value={photo} onChange={(e)=>{
                            searchPhoto(e.target.value)
                          }}/>

                          <Link to="/api" style={{ textDecoration: "none", color: "black" }} >
                              <button className="btn btn-outline-primary" onClick={handleOnclick} >Search</button>
                              </Link>

                      </form>
                  </div>
              </div>
          </nav>
    </div>
  )
}

export default Navbar
