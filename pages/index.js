import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useStateContext } from '../components/HBOProvider'
import Login from '../components/UI/Login/Login'
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'

import MediaRow from '../components/UI/MediaRow/MediaRow'
import AuthCheck from '../components/AuthCheck'

export default function Home() {
  const router = useRouter()

  const globalState = useStateContext()

  useEffect(() => {}, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow
        title="Movies"
        type="large-v"
        endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2021"
      />
      <MediaRow
        title="Series"
        type="small-h"
        endpoint="discover/tv?primary_release_year=2021"
      />
      <MediaRow
        title="Action"
        endpoint="discover/movie?with_genres=28&primary_release_year=2021"
      />
      <MediaRow
        title="Horror"
        endpoint="discover/movie?with_genres=27&primary_release_year=2021"
      />
      <MediaRow
        title="Animations"
        type="large-h"
        endpoint="discover/movie?with_genres=16&primary_release_year=2021"
      />
      <MediaRow
        title="Sci-Fi"
        endpoint="discover/movie?with_genres=878&primary_release_year=2021"
      />
    </MainLayout>
  )
}
