import video1 from '/Users/phamdoancanh/Documents/workspace/WEB/react pratice/React/video-practice/src/page/VideoPage/VideoHandle/video/tiktok1.mp4'
import { forwardRef, useImperativeHandle, useRef } from 'react'


function Video (prop, ref ) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }

    }))


    return (
    <>

        <video 
            ref={videoRef}
            src={video1}
            width="280"
        >
        </video>
    </>
    )

}

export default forwardRef(Video)