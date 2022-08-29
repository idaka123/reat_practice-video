import clsx from "clsx"
import { useContext } from "react"
import { videoContext } from "../../App"
import styles from './Button.module.css'


function Button({children, primary, error}) {
    
    const handle = useContext(videoContext)

    const classes = clsx(styles.btn, {
        [styles.primary] : primary,
        [styles.error] : error,
    })

    return(
        <>
        <button 
            className= {classes}
            onClick={ children === 'Play'? handle.handlePlay : handle.handlePause } >{children}</button>
        </>
    )

}

export default Button