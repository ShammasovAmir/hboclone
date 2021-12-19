import { useContext, useState, createContext } from 'react'

export const StateContext = createContext()

export const useStateContext = () => useContext(StateContext)

const HBOProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const [sideNavOpen, setSideNavOpen] = useState(false)
  const [accountModalOpen, setAccountModalOpen] = useState(false)

  const defaultUserImage = 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg'

  const createUserAction = (e) => setUser(e.target.value)

  const setSideNavOpenAction = () => setSideNavOpen(!sideNavOpen)

  const accountModalOpenAction = () => setAccountModalOpen(!accountModalOpen)

  return (
    <StateContext.Provider
      value={{
        test: 'Joseph',
        user,
        createUserAction,
        defaultUserImage,
        sideNavOpen,
        setSideNavOpenAction,
        accountModalOpen,
        accountModalOpenAction,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default HBOProvider
