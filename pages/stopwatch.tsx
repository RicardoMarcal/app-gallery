import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Stopwatch: NextPage = () => {
  const [start, setStart] = useState(Date.now())
  const [distance, setDistance] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [milisseconds, setMilisseconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      let distance = Date.now() - start
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000))
      setMilisseconds(Math.floor(distance % 1000))
    }, 50)
  
    return () => {
      clearInterval(timer)
    }
  }, [start])
  

  const handleStart = () => {
    setStart(Date.now())
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>App Gallery - Stopwatch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col py-5 items-center'>
          <h2 className="text-3xl font-bold text-blue-900">Stopwatch</h2>
          <p id="a" className='text-2xl mt-5'>
            {('00' + hours).slice(-2)}h
            {' '+('00' + minutes).slice(-2)}m
            {' '+('00' + seconds).slice(-2)}s
            {' '+('000' + milisseconds).slice(-3)}ms
          </p>
          <input
            type="button"
            value="Reset"
            onClick={handleStart}
            className="p-1 mt-5 w-32 text-center bg-slate-100 rounded-md cursor-pointer"
          />
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default Stopwatch