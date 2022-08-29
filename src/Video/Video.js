import video1 from 'https://v16-webapp.tiktok.com/8a67efebc27947ab810526bc1e3b3ccc/630c91a7/video/tos/maliva/tos-maliva-ve-0068c799-us/a04278df7e424683a89314a121850412/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1758&bt=879&cs=0&ds=3&ft=eXd.6Hk_Myq8ZEk3-he2N.~Qml7Gb&mime_type=video_mp4&qs=0&rc=OTg5ZmZpNDlkODk5aDU4PEBpajY4dDw6Zjc5ZTMzZzczNEBeYy0zYjIwNS8xLmJiMzFhYSNlai1kcjRfbnBgLS1kMS9zcw%3D%3D&l=202208290414510102452421040C9BED21&btag=80000'
import { forwardRef, useImperativeHandle, useRef } from 'react'

    const videoRef = useRef()

function Video (prop, ref ) {

    useImperativeHandle(ref , {
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }
    } )    
    return (
    <>
        <video 
            ref={videoRef}
            src= {video1}
            width="280"
        >
        
        </video>
    </>
    )

}

export default forwardRef(Video)