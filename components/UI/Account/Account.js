import { useStateContext } from '../../HBOProvider'

const Account = () => {
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
      className={`account ${
        globalState.accountModalOpen ? 'account--active' : ''
      }`}
    >
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          {loopComp(
            <div className="account__watch-video">
              <img
                src="https://live.staticflickr.com/6073/6058851314_7d965d9ec0_b.jpg"
                alt=""
              />
              <div className="account__watch-overlay">
                <div className="account__watch-buttons">
                  <div className="account__watch-circle">
                    <i className="fas fa-play" />
                  </div>
                  <div className="account__watch-circle">
                    <i className="fas fa-times" />
                  </div>
                </div>
              </div>
            </div>,
            6
          )}
        </div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <a href="#" className="active">
              My List
            </a>
          </li>
        </ul>
        <div className="side-nav__divider"></div>
        <ul className="account__main">
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Account
