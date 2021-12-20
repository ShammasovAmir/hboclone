const MediaRow = ({ title, type }) => {
  const loopComp = (comp, digit) => {
    let thumbnails = []
    for (let i = 0; i <= digit; i++) {
      thumbnails.push(comp)
    }

    return thumbnails
  }

  return (
    <div className={`media-row ${type ? type : 'small-v'}`}>
      <h3 className="media-row__title">{title}</h3>
      <div className="media-row__thumbnails">
        {loopComp(
          <div className="media-row__thumbnail">
            <img
              src="https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_9ef86295-4756-4c71-bb4e-20745c5fbc1a.jpg?v=1582781084"
              alt=""
            />
            <div className="media-row__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  )
}

export default MediaRow
