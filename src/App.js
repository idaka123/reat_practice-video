import { createContext, useRef } from "react";
import Video from './Video'
import Button from "./Video/button/Button";

export const videoContext = createContext()

function App() {

  const videoRef = useRef()

  const handlePlay = () => {
    videoRef.current.play()

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

      <Video ref={videoRef} ></Video>
      <Button primary>Play</Button>
      <Button error >Pause</Button>
    </videoContext.Provider>



  )

 
}


export default App;
