import { useContext, useState, createContext } from 'react'

export const StateContext = createContext()

export const useStateContext = () => useContext(StateContext)

const HBOProvider = ({ children }) => {
  return (
    <StateContext.Provider
      value={{
        test: 'Joseph',
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export default HBOProvider
