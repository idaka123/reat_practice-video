import { createContext, useRef } from "react";
import Video from './video/Video'
import Button from "./button/Button";


export const videoContext = createContext()

function VideoPage() {

  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()
    console.log(videoRef.current)

  }

  const handlePause = () => {
    videoRef.current.pause()
  }

  const handle = {
    handlePause,
    handlePlay,

  }

  return (
    
    <videoContext.Provider value={handle} >

      <Video ref={videoRef} />
      <Button primary>Play</Button>
      <Button error >Pause</Button>
    </videoContext.Provider>



  )

 
}


export default VideoPage;
