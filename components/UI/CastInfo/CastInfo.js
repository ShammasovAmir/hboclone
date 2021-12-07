import React from 'react'

const CastInfo = () => {
  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast & Crew</div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>James</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Michael</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Ryan Li</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Fabian</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Joseph</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Cillian</li>
          <li>George Lucas</li>
        </ul>
      </div>
      <div className="cast-info__group-title">Directors</div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>Director</li>
          <li>Elisha Long</li>
        </ul>
      </div>
    </div>
  )
}

export default CastInfo
