import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center p-6 text-center">
        <h1 className="text-6xl font-bold text-blue-900">Apps Challenge</h1>
        <p className="mt-3 text-2xl">By Ricardo Marçal</p>

        <div className='flex flex-col gap-2'>

        </div>

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p className="flex items-center justify-center gap-1">
          Most of these ideas can be found at{' '}
          <a
            className="text-blue-600"
            href="https://github.com/florinpop17/app-ideas"
            target='_blank'
            rel='noreferrer noopener'
          >
            github.com/florinpop17/app-ideas
          </a>
        </p>
      </footer>
    </div>
  )
}

export default Home
