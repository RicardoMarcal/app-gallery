import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const BinToDec: NextPage = () => {
  const [days, setDays] = useState(0)

  const handleCalc = () => {
    const start = (new Date((document.getElementById('start') as HTMLInputElement)?.value)).getTime() || Date.now()
    const final = (new Date((document.getElementById('final') as HTMLInputElement)?.value)).getTime() || Date.now()
    let r = Math.floor((final-start)/1000/60/60/24)
    setDays(r)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>Days Between Dates - App Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col items-center gap-2 py-5'>
          <h2 className="text-3xl font-bold text-blue-900">Days Between Dates</h2>
          <div>
            <label htmlFor="start">Start Date: </label>
            <input
            type="date"
            id="start"
            onChange={handleCalc}
            className="p-1 mt-5 w-44 text-center bg-slate-100 rounded-md"
          />
          </div>
          <div>
            <label htmlFor="final">Final Date: </label>
            <input
              type="date"
              id="final"
              onChange={handleCalc}
              className="p-1 w-44 text-center bg-slate-100 rounded-md"
            />
          </div>
          <p id="result" className='text-2xl mt-3 font-bold'>{days} days</p>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default BinToDec