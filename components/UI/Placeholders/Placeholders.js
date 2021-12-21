import axios from 'axios'
import { useState, useEffect } from 'react'
import { shuffleArray } from '../../utilities'

const Placeholders = ({ title, type, endpoint }) => {
  return (
    <div className={`media-row ${type ? type : 'small-v'}`}>
      <h3 className="media-row__title">{title}</h3>
      <div className="media-row__thumbnails">
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
        <div className="media-row__thumbnail-skeleton">
          <div className="media-row__thumbnail-skeleton-img"></div>
        </div>
      </div>
    </div>
  )
}

export default Placeholders
