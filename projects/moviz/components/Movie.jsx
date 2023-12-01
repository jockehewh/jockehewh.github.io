import React, {useState} from 'react'
import styles from "../styles/Movie.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'
export default function Movie(props) {
  const [personalNote, setPersonalNote] = useState(0)
  const [watchCount, setWatchCount] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  function starUp(){
    let res = [];
    for (let i = 1; i <= 10; i++) {
      if(i < Math.round(props.infos.voteAverage)){
        res.push(<FontAwesomeIcon icon={faStar} data-id={i} key={i} style={{color: "yellow"}}/>)
      }else{
        res.push(<FontAwesomeIcon icon={faStar} data-id={i} key={i} />)
      }
    }
    return res
  }
  function myStarUp(value) {
    let res = [];
    for (let i = 1; i <= 10; i++) {
      if (i <= personalNote) {
        res.push(<FontAwesomeIcon icon={faStar} onClick={changeNote} data-id={i} key={i} style={{ color: "#2196f3" }} />)
      } else {
        res.push(<FontAwesomeIcon icon={faStar} onClick={changeNote} data-id={i} key={i} />)
      }
    }
    return res
  }
  function changeNote(e,note){
    let movieKey =e.currentTarget.dataset.id
    setPersonalNote(movieKey)
    myStarUp(parseInt(movieKey))
   }
   function updateWatchCount(){
    setWatchCount(watchCount + 1)
   }
   function likeUpdate(){
    if(isLiked){
      props.fav.updateLikes(false, props.infos.title)
    }else{
      props.fav.updateLikes(true, props.infos.title)
    }
    setIsLiked(!isLiked)
   }
  return (
    <div className={styles.movie}>
      <img className={styles.img} src={`https://image.tmdb.org/t/p/original/${props.infos.poster}`} alt="Movie title" />
      <h2>{props.infos.title}</h2>
      <p>{props.infos.overview}</p>
      <div>
        <span>{
            starUp()
          }(Vote count)</span>
        <div>
          <span>{
            myStarUp()
          }(My count)</span>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
          <p onClick={updateWatchCount}><FontAwesomeIcon icon={faCamera} style={{ color: "orange" }} />({watchCount})</p>
          <p onClick={likeUpdate}><FontAwesomeIcon icon={faHeart} style={isLiked ? { color: "red" } : { color: "black" }} /></p>
        </div>
      </div>
    </div>
  )
}
