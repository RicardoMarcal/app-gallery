import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>App Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col gap-2 py-5'>
          <Link href='/bintodec'>
            <p className='p-2 rounded-md bg-blue-600 w-64 text-white cursor-pointer'>BinToDec</p>
          </Link>
          <Link href='/stopwatch'>
            <p className='p-2 rounded-md bg-blue-600 w-64 text-white cursor-pointer'>Stopwatch</p>
          </Link>
          <Link href='/passwordgenerator'>
            <p className='p-2 rounded-md bg-blue-600 w-64 text-white cursor-pointer'>Password Generator</p>
          </Link>
          <Link href='/todolist'>
            <p className='p-2 rounded-md bg-blue-600 w-64 text-white cursor-pointer'>To Do List</p>
          </Link>
          <Link href='/pomodoroclock'>
            <p className='p-2 rounded-md bg-blue-600 w-64 text-white cursor-pointer'>Pomodoro Clock</p>
          </Link>
          <Link href='/daysbetweendates'>
            <p className='p-2 rounded-md bg-blue-600 w-64 text-white cursor-pointer'>Days Between Dates</p>
          </Link>
          <Link href='/randomnumbergenerator'>
            <p className='p-2 rounded-md bg-blue-600 w-64 text-white cursor-pointer'>Random Number Generator</p>
          </Link>
          <Link href='/slotmachine'>
            <p className='p-2 rounded-md bg-blue-600 w-64 text-white cursor-pointer'>Slot Machine</p>
          </Link>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default Home
