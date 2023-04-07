import React from 'react'
import PhotoHook from './Photocontext'
import { saveAs } from 'file-saver';
import { Link } from 'react-router-dom';
function PhotoSlected() {
  const { showImg, changeShowImg } = PhotoHook()
  const { photo, searchPhoto } = PhotoHook()

  const downloadImg = () => {
    saveAs(showImg)
  }
  return (
    <div className="container d-flex-justify-content-center">
      <div className='container ' style={{ marginTop: '2rem', width: '100%' }}>
        <div className="container border p-1 myshadow" style={{ height: '30rem', width: '100%' }}>
          <img src={`${showImg}`} alt="" style={{ height: '100%', width: '100%' }} />
        </div>
      </div>
      <div className="d-flex justify-content-evenly" style={{ marginTop: '20px' }}>
        {(photo === undefined) ? <Link to='/' ><button className="btn btn-success" style={{ width: '100px' }} > Back</button></Link> : <Link to='/api'><button className="btn btn-success" style={{ width: '100px' }} > Back</button></Link>}
        <button className="btn btn-success" style={{
          width: '100px'
        }} onClick={downloadImg}>Download</button>
      </div>
    </div>
  )
}

export default PhotoSlected
