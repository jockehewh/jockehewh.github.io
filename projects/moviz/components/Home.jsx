import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Movie from './Movie'
import styles from "../styles/Home.module.css"


export default function Home() {
  const [likeCount, setLikeCount] = useState(0)
  const [likedMovies, setLikedMovies] = useState([])
  const [moviesData, setMoviesData] = useState([])
  function fetchMovies() {
    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=99a959537352a345ae214a14d1a4c48c';
    const options = {
      method: 'GET', headers: {
        accept: 'application/json',
        Authorization: 'Bearer 99a959537352a345ae214a14d1a4c48c'
      }
    }
    return fetch(url, options).then(res => res.json()).then(data => data.results)
  };
  useEffect(()=>{
    let parsedData = []
    fetchMovies().then(data=>{
      data.forEach(movie=>{
        parsedData.push({
          title: movie.title,
          poster: movie.poster_path,
          voteAverage: movie.vote_average,
          voteCount: movie.vote_count,
          overview: movie.overview,
        })
      }).then(d=>{
        setMoviesData(parsedData)
      })
    }).catch(err =>{
      console.log(err)
    })
    
  },[])


function updateLikeCount(ok, movieName) {
  if (ok) {
    setLikeCount(likeCount + 1)
    setLikedMovies([...likedMovies, movieName])
  } else {
    setLikeCount(likeCount - 1)
    setLikedMovies(likedMovies.filter(movie => {
      return movie !== movieName
    }))
  }
}
function  displayMovie() {
    let fav = { isLiked: false, updateLikes: updateLikeCount }
    return moviesData.map((mov, i) => <Movie infos={mov} fav={fav} key={i} />)

}
return (
  <div className={styles.home}>
    <Navbar likes={{ likeCount, likedMovies, updateLikes: updateLikeCount }} />
    <h1>LAST RELEASES</h1>
    <div className={styles.moviebox}>
      {displayMovie()}
    </div>
  </div>
)
}
