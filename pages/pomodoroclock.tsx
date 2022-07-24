import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Stopwatch: NextPage = () => {
  const [paused, setPaused] = useState(true)
  const [working, setWorking] = useState(true)
  const [focus, setFocus] = useState('')
  const [finalTime, setFinalTime] = useState(Date.now() + 1500000)
  const [timeLeft, setTimeLeft] = useState(1500)

  useEffect(() => {
    const sound = new Audio("https://cdn.pixabay.com/download/audio/2021/09/27/audio_91211934db.mp3?filename=clock-alarm-8761.mp3")
    const timer = setInterval(() => {
      if(!paused){
        if(timeLeft <= 0){
          sound.play()
          handleReset()
          return
        }
        setTimeLeft(Math.ceil((finalTime-Date.now())/1000))
      }
    }, 500)
  
    return () => {
      clearInterval(timer)
    }
  }, [paused, timeLeft, finalTime])
  

  const handleReset = () => {
    if(!working){
    setTimeLeft(1500)
    setFinalTime(Date.now() + 1500000)
    }else{
    setTimeLeft(300)
    setFinalTime(Date.now() + 300000)
    }
    setPaused(true)
    setWorking(!working)
  }

  const handlePause = () => {
    setFinalTime(Date.now()+timeLeft*1000)
    setPaused(!paused)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>
          {working ? '🍅 ' : '💤 '}
          {`(${Math.floor((timeLeft-timeLeft%60)/60)}:`}
          {`${('00'+Math.floor(timeLeft%60)).slice(-2)}`}
          {`${focus && working ? ' - '+focus+') ' : focus && !working ? ' - Break) ' : ') '}`}
          Pomodoro Clock - App Gallery
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col py-5 items-center'>
          <h2 className="text-3xl font-bold text-blue-900">Pomodoro Clock</h2>
          <p className='text-3xl font-bold mt-5'>
            {working ? '🍅 ' : '💤 '}
            {`${Math.floor((timeLeft-timeLeft%60)/60)}:`}
            {`${('00'+Math.floor(timeLeft%60)).slice(-2)}`}
          </p>
          <section className='flex gap-3'>
            <input
              type="button"
              value={paused ? 'Start' : 'Pause'}
              onClick={handlePause}
              className="p-1 mt-5 w-32 text-center bg-slate-100 rounded-md cursor-pointer"
            />
            <input
              type="button"
              value="Reset"
              onClick={handleReset}
              className="p-1 mt-5 w-32 text-center bg-slate-100 rounded-md cursor-pointer"
            />
          </section>
        </div>
        <input
          type="text"
          placeholder="What are you focusing on?"
          onChange={e => setFocus(e.target.value)}
          className="p-1 mt-3 w-64 text-center bg-transparent rounded-md border-b-2"
        />

      </main>

      <Footer/>
    </div>
  )
}

export default Stopwatch