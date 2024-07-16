import useSWR from 'swr'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'

const fetcher = url => unfetch(url).then(r => r.json())
const url =  'https://ec-berg.com/wp-json/wp/v2/posts'

export const Home = ({posts: initialPosts}) => {
  const {data: posts} = useSWR(
     url,
      fetcher,
      initialPosts
  )
  return (...)
}

export const getStaticProps = async () => {
     const posts = await fetcher(url)
     return {
       props: { posts }
     }
}

export default Home