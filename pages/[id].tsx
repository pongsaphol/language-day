import { GetStaticPaths, GetStaticProps } from 'next'
import data from '../static/data'

const Page = ({ id }) => {
  return (
    <div className="container flex">
      <h1 id="quote">{data[id].quote}</h1>
      <h2 id="karaoke">{data[id].karaoke}</h2>
      <h4>{data[id].meaning}</h4>
    </div>
  )
}

export default Page

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: data.map(({ id }) => {
      return { params: { id: id.toString() } }
    }),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { id } }) => {
  return {
    props: {
      id,
    },
  }
}
