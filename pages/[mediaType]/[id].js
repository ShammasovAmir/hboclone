import Head from 'next/head'
import axios from 'axios'
import AuthCheck from '../../components/AuthCheck'
import MainLayout from '../../components/Layouts/MainLayout'
import CastInfo from '../../components/UI/CastInfo/CastInfo'
import FeaturedMedia from '../../components/UI/FeaturedMedia/FeaturedMedia'
import MediaRow from '../../components/UI/MediaRow/MediaRow'
import LazyLoad from 'react-lazyload'
import Placeholders from '../../components/UI/Placeholders/Placeholders'

export default function SingleMediaPage({ query, mediaData }) {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/original${mediaData.backdrop_path}`}
        title={query.mediaType === 'movie' ? mediaData.title : mediaData.name}
        location={query.mediaType === 'movie' ? mediaData.tagline : ''}
        linkUrl="/movies/id"
        type="single"
      />
      <LazyLoad offset={-440} placeholder={<Placeholders title="Movies" />}>
        <MediaRow
          title="Similar To This"
          mediaType={query.mediaType === 'tv' ? 'series' : ''}
          endpoint={`${query.mediaType === 'movie' ? 'movie' : 'tv'}/${
            query.id
          }/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaId={query.id} mediaType={query.mediaType} />
    </MainLayout>
  )
}

export async function getServerSideProps(context) {
  let mediaData
  try {
    mediaData = await axios.get(
      `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=9a06c37273a24d219994b809eaf715bc&language=en-US`
    )
  } catch (error) {
    console.error(error)
  }
  return {
    props: { mediaData: mediaData.data, query: context.query }, // will be passed to the page component as props
  }
}
