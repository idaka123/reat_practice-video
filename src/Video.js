import { forwardRef, useRef, useImperativeHandle } from "react"


function Video(prop, ref) {

    const videoRef = useRef()

    useImperativeHandle (ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        }

    }))

    return (
        <video 
        className="video"
        ref={videoRef}
        src="https://v16-webapp.tiktok.com/850f345bf412559a7091434aeb8f44f1/630b8c98/video/tos/maliva/tos-maliva-ve-0068c799-us/a04278df7e424683a89314a121850412/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1758&bt=879&cs=0&ds=3&ft=eXd.6Hk_Myq8ZQSi0he2NSchml7Gb&mime_type=video_mp4&qs=0&rc=OTg5ZmZpNDlkODk5aDU4PEBpajY4dDw6Zjc5ZTMzZzczNEBeYy0zYjIwNS8xLmJiMzFhYSNlai1kcjRfbnBgLS1kMS9zcw%3D%3D&l=20220828094100010244029188072A8214&btag=80000"
        
        width={280}
        >
            
        </video>

    )
}

export default forwardRef(Video)