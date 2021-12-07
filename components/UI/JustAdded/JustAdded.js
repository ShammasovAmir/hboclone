const JustAdded = () => {
  const loopComp = (comp, digit) => {
    let thumbnails = []
    for (let i = 0; i <= digit; i++) {
      thumbnails.push(comp)
    }

    return thumbnails
  }

  return (
    <div className="just-added">
      <h3 className="just-added__title">Just Added</h3>
      <div className="just-added__thumbnails">
        {loopComp(
          <div className="just-added__thumbnail">
            <img
              src="https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_9ef86295-4756-4c71-bb4e-20745c5fbc1a.jpg?v=1582781084"
              alt=""
            />
            <div className="just-added__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  )
}

export default JustAdded
