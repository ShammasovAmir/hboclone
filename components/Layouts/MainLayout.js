import Header from '../UI/Header/Header'
import SideNav from '../UI/SideNav/SideNav'

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        background: 'rgb(2,27,64)',
        background:
          'linear-gradient(135deg, rgba(0,0,0,1) 55%, rgba(119,30,135,.5) 100%)',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
      }}
    >
      <Header />
      <SideNav />
      <section className="content-container">{children}</section>
    </div>
  )
}

export default MainLayout
