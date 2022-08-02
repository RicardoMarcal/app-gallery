import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const symbols = ['🍒','🍋','🍌','💎','🎰','🔔','🍉','🍀','🍇']

const winSound = new Audio('https://cdn.pixabay.com/download/audio/2022/01/18/audio_f981d1ac7d.mp3?filename=piglevelwin2mp3-14800.mp3')
const playSound = new Audio('https://cdn.pixabay.com/download/audio/2022/03/10/audio_fa5b506645.mp3?filename=coins-falling-013-36967.mp3')

const BinToDec: NextPage = () => {
  const [result, setResult] = useState(['🍒','🍀','💎'])
  const [wins, setWins] = useState(0)
  const [losses, setLosses] = useState(0)


  const handleAnimate = (time: number, x: number) => {
    setTimeout(() => {
      const r = [
        symbols[Math.floor(Math.random()*symbols.length)],
        symbols[Math.floor(Math.random()*symbols.length)],
        symbols[Math.floor(Math.random()*symbols.length)],
      ]
      setResult(r)
      if(time/9 === x){
        setTimeout(() => {
          if(r[0] === r[1] && r[0] === r[2]){
            setWins(wins+1)
            winSound.play()
          }else{
            setLosses(losses+1)
          }
        }, 150)
      }
    }, time)
  }

  const handleRoll = () => {
    const time = 100
    playSound.play()
    for(let i = 0; i < 10; i++){
      handleAnimate(time*i, time)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>Slot Machine - App Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col gap-4 p-5'>
          <h2 className="text-3xl font-bold text-blue-900">Slot Machine</h2>
          <div className='flex flex-col items-center gap-3 p-5 border-2 border-slate-800 bg-yellow-100 rounded-md'>
            <section className='flex justify-evenly bg-slate-100 border-2 border-slate-800 rounded-md w-56 mt-3 p-3 text-2xl'>
              <p>{result[0]}</p>
              <p>{result[1]}</p>
              <p>{result[2]}</p>
            </section>
            <input
              type="button"
              value="Roll"
              onClick={handleRoll}
              className="p-1 mt-2 w-28 text-center bg-red-600 text-white rounded-md cursor-pointer"
            />
          </div>
        </div>
        <p className='text-lg font-bold'>Wins: {wins}</p>
        <p className='text-lg font-bold'>Losses: {losses}</p>

      </main>

      <Footer/>
    </div>
  )
}

export default BinToDec