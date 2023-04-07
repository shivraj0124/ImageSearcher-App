import React from 'react'
import { useContext, createContext,useState } from 'react'

const PhotoContext = createContext();

export const Photoprovider =({children})=> {

    const [photo, setPhoto] = useState();
    const [result, setresult] = useState();
    const [nofound, setnoFound] = useState(true)
    const [showImg,setShowImg]=useState()
    
    const searchPhoto =(photo)=>{
        setPhoto(photo)
    }
    const changeresult =(res)=>{
        setresult(res)
    }
    const changenoFound =(fnd)=>{
        setnoFound(fnd)
    }
    const changeShowImg = (ImgUrl)=>{
        setShowImg(ImgUrl)
    }
    
    const value ={
        photo,
        searchPhoto,
        result,
        changeresult,
        nofound,
        changenoFound,
        showImg,
        changeShowImg
    }

    return <PhotoContext.Provider value={value} >
        {children}
    </PhotoContext.Provider>    
}

function PhotoHook(){
    const context = useContext(PhotoContext);
    if (context == undefined) {
        throw new Error('hook is not working');
    }
    return context
}
export default PhotoHook;