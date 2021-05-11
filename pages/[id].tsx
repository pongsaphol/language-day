import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { Fragment } from 'react'
import data from '../static/data'

const Page = ({ id }) => {
  return (
    <Fragment>
      <Link href="/">
        <div className="back-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
      <div className="container flex">
        <h1 id="quote">{data[id].quote}</h1>
        <h2 id="karaoke">{data[id].karaoke}</h2>
        <h4>{data[id].meaning}</h4>
      </div>
    </Fragment>
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
