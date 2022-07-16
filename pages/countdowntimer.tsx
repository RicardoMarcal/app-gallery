import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const CountdownTimer: NextPage = () => {
  const [start, setStart] = useState(Date.now())
  const [distance, setDistance] = useState(0)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      let distance = Date.now() - start
      console.log(start)
      console.log(Date.now())
      console.log(distance)
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
    }, 1000)
  
    return () => {
      clearInterval(timer)
    }
  }, [])
  

  const handleClick = () => {
    setStart(Date.now())
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>App Gallery - Countdown Timer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col gap-2 py-5'>
          <h2 className="text-3xl font-bold text-blue-900">BinToDec</h2>
          <input
            type="button"
            value="Start"
            onClick={handleClick}
            className="p-1 mt-5 text-center bg-slate-100 rounded-md cursor-pointer"
          />
          <p id="a" className='text-2xl'>
            {days}:
            {hours}:
            {minutes}:
            {seconds}
          </p>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default CountdownTimer