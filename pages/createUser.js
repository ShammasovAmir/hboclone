import Head from 'next/head'

export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Create Profile</span>
        </div>

        <div className="create-user__form">
          <img
            src="https://uifaces.co/our-content/donated/vIqzOHXj.jpg"
            alt=""
            className="create-user__user-img"
          />
          <div className="create-user__input-group">
            <label htmlFor="">Name</label>
            <input type="text" className="create-user__input-text" />
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
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  )
}
