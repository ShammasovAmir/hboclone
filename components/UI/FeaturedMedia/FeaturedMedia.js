import { useRouter } from 'next/router'

const FeaturedMedia = ({ mediaUrl, title, location, linkUrl, type }) => {
  const router = useRouter()

  const clickedPlay = () => {
    router.push(linkUrl)
    console.log('send user to media page ' + linkUrl)
  }

  const showMedia = () =>
    type === 'front' ? (
      <iframe
        className="featured-media__video"
        width="100%"
        height="100%"
        src={mediaUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ) : (
      <img src={mediaUrl} alt={title} className="featured-media__banner" />
    )

  return (
    <div className="featured-media">
      {showMedia()}
      <div className="featured-media__bg">
        <div className="featured-media__container">
          <div className="featured-media__title" onClick={clickedPlay}>
            {title}
          </div>
          {type === 'front' ? (
            <div className="featured-media__playing">NOW PLAYING</div>
          ) : (
            ''
          )}
          <div className="featured-media__location">{location}</div>
          <div className="featured-media__buttons">
            <div className="featured-media__play-btn" onClick={clickedPlay}>
              <i className="fas fa-play" />
            </div>
            {type === 'front' ? (
              <div className="featured-media__info-btn" onClick={clickedPlay}>
                MORE INFO
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMedia
