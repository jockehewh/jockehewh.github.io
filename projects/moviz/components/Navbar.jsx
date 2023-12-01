import React from 'react'
import styles from "../styles/Navbar.module.css"
import Favorites from './Favorites'

export default function Navbar(props) {
  return (
    <div className={styles.navbar}>
      <div className={styles.logos}>
        <img className={styles.img} src="logo.png" alt="Logo" />
        <img className={styles.imgletter} src="logoletter.png" alt="Logo letter" />
      </div>
      <Favorites likes={props.likes.likeCount} list={props.likes.likedMovies}
        func={props.likes.updateLikes}/>
    </div>
  )
}
