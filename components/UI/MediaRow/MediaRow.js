import axios from 'axios'
import { useState, useEffect } from 'react'
import { shuffleArray } from '../../utilities'

const MediaRow = ({ title, type, endpoint }) => {
  const [loadingData, setLoadingData] = useState(true)
  const [movies, setMovies] = useState([])

  // /discover/movie?with_genres=28&primary_release_year=2021

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${endpoint}&api_key=9a06c37273a24d219994b809eaf715bc&language=en-US`
      )
      .then((response) => {
        setMovies(shuffleArray(response.data.results))
        // handle success
        setLoadingData(false)
        console.log('Success response for ' + title)
        console.log(response)
      })
      .catch((error) => {
        // handle error
        console.log('Error for ' + title)
        console.log(error)
      })
  }, [])

  const loopComp = (comp, digit) => {
    let thumbnails = []
    for (let i = 0; i <= digit; i++) {
      thumbnails.push(comp)
    }

    return thumbnails
  }

  const showThumbnails = () => {
    return loadingData
      ? loopComp(<Skeleton />, 10)
      : movies.map((movie) => <Thumbnail movieData={movie} key={movie.id} />)
  }

  return (
    <div className={`media-row ${type ? type : 'small-v'}`}>
      <h3 className="media-row__title">{title}</h3>
      <div className="media-row__thumbnails">{showThumbnails()}</div>
    </div>
  )
}

const Thumbnail = ({ movieData }) => {
  return (
    <div className="media-row__thumbnail">
      <img
        src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`}
        alt=""
      />
      <div className="media-row__top-layer">
        <i className="fas fa-play" />
      </div>
    </div>
  )
}

const Skeleton = () => (
  <div className="media-row__thumbnail-skeleton">
    <div className="media-row__thumbnail-skeleton-img"></div>
  </div>
)

export default MediaRow
