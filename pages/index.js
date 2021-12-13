import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useStateContext } from '../components/HBOProvider'
import Login from '../components/UI/Login/Login'
import MainLayout from '../components/Layouts/MainLayout'
import FeaturedMedia from '../components/UI/FeaturedMedia/FeaturedMedia'
import ForYouList from '../components/UI/ForYouList/ForYouList'
import JustAdded from '../components/UI/JustAdded/JustAdded'
import PosterView from '../components/UI/PosterView/PosterView'
import AuthCheck from '../components/AuthCheck'

export default function Home() {
  const router = useRouter()

  const globalState = useStateContext()

  useEffect(() => {}, [])

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  )
}
