import { useStateContext } from '../../HBOProvider'

const SearchModal = () => {
  const globalState = useStateContext()

  const loopComp = (comp, digit) => {
    let thumbnails = []
    for (let i = 0; i <= digit; i++) {
      thumbnails.push(comp)
    }

    return thumbnails
  }

  return (
    <div
      className={`search-modal ${
        globalState.searchOpen ? 'search-modal--active' : ''
      }`}
    >
      <div className="search-modal__input-group">
        <input
          className="search-modal__input"
          type="text"
          placeholder="Search for a title"
          value=""
        />
        <div
          className="search-modal__close-btn"
          onClick={globalState.searchOpenAction}
        >
          <i className="fas fa-times" />
        </div>
      </div>
      <h3 className="search-modal__title">Popular Searches</h3>
      <div className="search-modal__thumbnails">
        {loopComp(
          <div className="search-modal__thumbnail">
            <img
              src="https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_9ef86295-4756-4c71-bb4e-20745c5fbc1a.jpg?v=1582781084"
              alt=""
            />
            <div className="search-modal__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  )
}

export default SearchModal
