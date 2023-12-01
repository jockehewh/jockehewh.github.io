import React, { useState } from 'react'
import styles from "../styles/Favorites.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Movie from './Movie'

export default function Favorites(props) {
  const [viewModal, setviewModal] = useState(false)
  function handleModal(){
    setviewModal(!viewModal)
  }
  function dislikeMovie(e, title){
    console.log(props.func)
    props.func(false, title)
  }
  function listFav(){
    if(props.list){
      return props.list.map((title, i)=> {
        return <p key={i} onClick={dislikeMovie}>{title}</p>}
      )
    }
  }
  return (
    <div onClick={handleModal}>
      <div className={styles.fav}>
        <p>
          <span style={props.likes > 0 ? { color: "red" } : { color: "white" }}><FontAwesomeIcon icon={faHeart} /></span>
          <span>{props.likes ? props.likes : "0"}</span>
          Movie(s)
        </p>
      </div>
      <div className={viewModal ? `${styles.fav_modal} ${styles.show_modal}` : `${styles.fav_modal}`}>
        {listFav()}
      </div>
    </div>
  )
}
