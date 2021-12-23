import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useStateContext } from '../../components/HBOProvider'
import LazyLoad from 'react-lazyload'
import Login from '../../components/UI/Login/Login'
import MainLayout from '../../components/Layouts/MainLayout'
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../components/UI/MediaRow/MediaRow'
import AuthCheck from '../../components/AuthCheck'
import Placeholders from '../../components/UI/Placeholders/Placeholders'

export default function Home() {
  const router = useRouter()

  const globalState = useStateContext()

  useEffect(() => {}, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=16"
        title="Mortal Kombat"
        location="In theatres and HBO MAX. Streaming throughout May 23."
        linkUrl="/movie/460465"
        type="front"
      />

      <LazyLoad
        offset={-680}
        placeholder={<Placeholders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
        />
      </LazyLoad>

      <LazyLoad
        offset={-333}
        placeholder={<Placeholders title="Series" type="small-h" />}
      >
        <MediaRow
          title="Series"
          type="small-h"
          mediaType="series"
          endpoint="discover/tv?primary_release_year=2021"
        />
      </LazyLoad>

      <LazyLoad offset={-440} placeholder={<Placeholders title="Action" />}>
        <MediaRow
          title="Action"
          endpoint="discover/movie?with_genres=28&primary_release_year=2021"
        />
      </LazyLoad>

      <LazyLoad offset={-440} placeholder={<Placeholders title="Horror" />}>
        <MediaRow
          title="Horror"
          endpoint="discover/movie?with_genres=27&primary_release_year=2021"
        />
      </LazyLoad>

      <LazyLoad
        offset={-472}
        placeholder={<Placeholders title="Animations" type="large-h" />}
      >
        <MediaRow
          title="Animations"
          type="large-h"
          endpoint="discover/movie?with_genres=16&primary_release_year=2021"
        />
      </LazyLoad>

      <LazyLoad offset={-440} placeholder={<Placeholders title="Sci-Fi" />}>
        <MediaRow
          title="Sci-Fi"
          endpoint="discover/movie?with_genres=878&primary_release_year=2021"
        />
      </LazyLoad>
    </MainLayout>
  )
}
