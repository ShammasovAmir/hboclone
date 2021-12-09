import { useContext, useState, createContext } from 'react'

export const StateContext = createContext()

export const useStateContext = () => useContext(StateContext)

const HBOProvider = ({ children }) => {
  const [user, setUser] = useState('')
  const defaultUserImage = 'https://uifaces.co/our-content/donated/vIqzOHXj.jpg'

  const createUserAction = (e) => {
    setUser(e.target.value)
  }

  return (
    <StateContext.Provider
      value={{
        test: 'Joseph',
        user,
        createUserAction,
        defaultUserImage,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default HBOProvider
