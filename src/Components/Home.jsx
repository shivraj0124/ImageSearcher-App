import React,{useEffect,useState} from 'react'
import axios from  'axios'
import { Fade } from "react-awesome-reveal";
import PhotoHook from './Photocontext';
import {Link} from 'react-router-dom'
function Home() {

    const [cmnPhotos,setcmnPhotos]=useState("nature")
    const [myresult,setmyresult]=useState()
    const { showImg, changeShowImg } = PhotoHook()
    const { photo, searchPhoto } = PhotoHook()

    const handleOnclick = (e) => {
        changeShowImg(e.target.src)
        
    }
    const getPhotos =()=>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${cmnPhotos}&client_id=Qgyk1bDc4H6zoBstQnkLaj3vai6MFu7GzkZgBHkEq7A`)
            .then((response) => {               
                setmyresult(response.data.results)
            })
        searchPhoto()
    }

    useEffect(()=>{
      getPhotos()
    },[])
  return (
  
          <div className='cardContain' >
              {myresult?.map((value) => {
                  return (
                      <Fade cascade>
                          <Link to='/FullImg'>
                              <div className='myCard'  onClick={handleOnclick} >
                                  <img className='imgCard' style={{ height: '25rem', width: '20rem' }} src={value.urls.small} alt="" />
                          </div>
                          </Link>
                      </Fade>
                  )
              })}

          </div>
    
  )
}

export default Home
