import Link from 'next/link'
import { useStateContext } from '../../HBOProvider'
import Account from '../Account/Account'
import SearchModal from '../SearchModal/SearchModal'

const Header = () => {
  const globalState = useStateContext()

  return (
    <header
      className={`top-header ${
        globalState.sideNavOpen
          ? 'top-header--active'
          : globalState.accountModalOpen
          ? 'top-header--active'
          : ''
      }`}
    >
      <div className="top-header__left-side">
        <div
          className="top-header__menu-btn"
          onClick={globalState.setSideNavOpenAction}
        >
          <i className="fas fa-bars" />
        </div>
        <div
          className="top-header__search-btn"
          onClick={globalState.searchOpenAction}
        >
          <i className="fas fa-search" />
        </div>
      </div>
      <Link href="/">
        <a className="top-header__logo"></a>
      </Link>
      <div
        className="top-header__account"
        onClick={globalState.accountModalOpenAction}
      >
        <img
          src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg"
          className="top-header__user-img"
          alt=""
        />
        <div className="top-header__user-name">Bryant</div>
      </div>
      <Account />
      <SearchModal />
    </header>
  )
}

export default Header
