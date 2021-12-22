import axios from 'axios'
import { useState, useEffect } from 'react'

const CastInfo = ({ mediaId, mediaType }) => {
  const [loadingData, setLoadingData] = useState(true)
  const [credits, setCredits] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${mediaType}/${mediaId}/credits?api_key=9a06c37273a24d219994b809eaf715bc&language=en-US`
      )
      .then((response) => {
        setCredits(response.data)
        // handle success
        setLoadingData(false)
        console.log('Success response for cast & crew')
        console.log(response)
      })
      .catch((error) => {
        // handle error
        console.log('Error for for cast & crew')
        console.log(error)
      })
  }, [mediaId, mediaType])

  const showCast = () =>
    loadingData !== true ? (
      credits.cast.map((item) => (
        <ul className="cast-info__crew" key={item.id}>
          <li>{item.character}</li>
          <li>{item.name}</li>
        </ul>
      ))
    ) : (
      <div>Loading Cast...</div>
    )

  const showCrew = () =>
    loadingData !== true ? (
      credits.crew.map((item) => (
        <ul className="cast-info__crew" key={item.id}>
          <li>{item.job}</li>
          <li>{item.name}</li>
        </ul>
      ))
    ) : (
      <div>Loading Crew...</div>
    )

  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast</div>
      <div className="cast-info__list">{showCast()}</div>
      <div className="cast-info__group-title">Crew</div>
      <div className="cast-info__list">{showCrew()}</div>
    </div>
  )
}

export default CastInfo
