import React from 'react'
import styles from "./Loader.module.scss"
import loaderImg from "../../assets/loader.gif"
import ReactDOM from 'react-dom'

const Loader = () => {
    //check index.html and create loader div
  return (
    ReactDOM.createPortal(
        <div className={styles.wrapper}>
            <div className={styles.loader}>
                <img  
                    src={loaderImg}
                    alt='loading...'
                    style={{width: "50px"}}
                />
            </div>
        </div>,
        document.getElementById("loader")
    )
  )
}

export const Spinner = () => {
    return (
        <div className="--center-all">
            <img  
                src={loaderImg}
                alt='loading...'
                style={{width: "50px"}}
            />
        </div>
    )
}

export default Loader

//This gives us a full screen loader
