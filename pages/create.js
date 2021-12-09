import Head from 'next/head'
import { useStateContext } from '../components/HBOProvider'
import ls from 'local-storage'
import { v4 } from 'uuid'
import { useRouter } from 'next/router'

export default function CreateUser() {
  const globalState = useStateContext()

  const router = useRouter()

  const saveUser = () => {
    let users = [],
      user

    if (ls('users') < 1) {
      user = {
        id: v4(),
        name: globalState.user,
        myListId: [],
      }
      users.push(user)
      ls('users', users)

      console.log('Users: ', users)
      console.log('Local Users: ', ls('users'))
    } else {
      users = ls('users')
      user = {
        id: v4(),
        name: globalState.user,
        myListId: [],
      }
      users.push(user)
      ls('users', users)
      router.push('/login')
      console.log('Users: ', users)
      console.log('Local Users: ', ls('users'))
    }
  }

  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Create Profile</span>
        </div>

        <div className="create-user__form">
          <img
            src={globalState.defaultUserImage}
            alt=""
            className="create-user__user-img"
          />
          <div className="create-user__input-group">
            <label htmlFor="">Name</label>
            <input
              value={globalState.user}
              onChange={globalState.createUserAction}
              type="text"
              className="create-user__input-text"
            />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: 'rgb(2,27,64)',
                  background:
                    'linear-gradient(135deg, rgba(2,27,64,1) 35%, rgba(119,30,135,1) 100%)',
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: 'rgb(2,27,64)',
                  background:
                    'linear-gradient(135deg, rgba(2,27,64,1) 35%, rgba(34,135,30,1) 100%)',
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: 'rgb(254,97,219)',
                  background:
                    'linear-gradient(135deg, rgba(254,97,219,1) 35%, rgba(126,35,236,1) 100%)',
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: 'rgb(219,121,35)',
                  background:
                    'linear-gradient(135deg, rgba(219,121,35,1) 35%, rgba(54,4,28,1) 100%)',
                }}
              />
              <div
                className="create-user__color"
                style={{
                  background: 'rgb(101,147,254)',
                  background:
                    'linear-gradient(135deg, rgba(101,147,254,1) 35%, rgba(30,16,254,1) 100%)',
                }}
              />
            </div>
          </div>
        </div>

        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save" onClick={saveUser}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
