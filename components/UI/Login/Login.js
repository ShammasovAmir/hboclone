import Head from 'next/head'
import { useStateContext } from '../../HBOProvider'
import { useRouter } from 'next/router'
import ls from 'local-storage'
import { useEffect, useState } from 'react'
import { useMounted } from '../../Hooks/useMounted'

const Login = () => {
  const globalState = useStateContext()
  const router = useRouter()

  const [loadingUsers, setLoadingUsers] = useState(false)
  let users = ls('users') !== null ? ls('users') : []
  const { hasMounted } = useMounted()

  useEffect(() => {
    if (users < 1) setLoadingUsers(false)
    console.log('Load effect: ', users)
  }, [])

  const selectUser = (id) => {
    ls('activeUID', id)
    router.push('/')
  }

  const createUser = () => router.push('/create')

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user, i) => (
        <div
          onClick={() => selectUser(user.id)}
          className="login-user__user-box"
          key={i}
        >
          <img src="" alt="" className="login-user__user-img" />
          <div className="login-user__user-name">{user.name}</div>
        </div>
      ))
    }
  }

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who Is Watching?</span>
      </div>
      <div className="login-user__form">{hasMounted ? showUsers() : ''}</div>

      <div className="login-user__buttons">
        <button className="login-user__kid" onClick={createUser}>
          Add User
        </button>
      </div>
    </div>
  )
}

export default Login
