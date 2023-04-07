import React from 'react'
import PhotoHook from './Photocontext'
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
function Api() {

 
  const { result, changeresult } = PhotoHook()
  const { nofound, changenoFound } = PhotoHook()
  const { showImg, changeShowImg } = PhotoHook()

  const handleOnclick =(e)=>{
     changeShowImg(e.target.src)
     
  }

  if (nofound === true) {
      <div className="container">
        <img src="https://cdn.dribbble.com/users/1242216/screenshots/9326781/media/6384fef8088782664310666d3b7d4bf2.png?compress=1&resize=400x300&vertical=top" alt="" />
      </div>
  }
  else {
    return (
      <div className='outrDiv' >

        <div className='cardContain' >
          {result?.map((value,id) => {
            return (
              <Fade cascade>
                <Link to='/FullImg'>
                <div  className='myCard' id={id} onClick={handleOnclick} >
                  <img className='imgCard' style={{ height: '25rem', width: '20rem' }} src={value.urls.small} alt="" />
                </div>
                  </Link>
              </Fade>
            )
          })}

        </div>


      </div>
    )
  }
}

// myAppImage@145 

export default Api
