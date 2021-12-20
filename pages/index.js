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
      <MediaRow title="Movies" type="large-v" />
      <MediaRow title="Series" type="small-h" />
      <MediaRow title="Action" />
      <MediaRow title="Horror" />
      <MediaRow title="Sci-Fi" />
    </MainLayout>
  )
}
