import Link from 'next/link'
import { useStateContext } from '../../HBOProvider'

const SideNav = () => {
  const globalState = useStateContext()

  return (
    <div
      className={`side-nav ${
        globalState.sideNavOpen ? 'side-nav--active' : ''
      }`}
    >
      <div
        className="side-nav__close-btn"
        onClick={globalState.setSideNavOpenAction}
      >
        <i className="fas fa-times" />
      </div>
      <ul className="side-nav__main">
        <li onClick={globalState.setSideNavOpenAction}>
          <Link href="/">
            <a className="active">Home</a>
          </Link>
        </li>
        <li onClick={globalState.setSideNavOpenAction}>
          <Link href="/movie">
            <a>Movies</a>
          </Link>
        </li>
        <li onClick={globalState.setSideNavOpenAction}>
          <Link href="/tv">
            <a>Series</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
