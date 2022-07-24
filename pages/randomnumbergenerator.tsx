import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const BinToDec: NextPage = () => {
  const [result, setResult] = useState(0)
  const [min, setMin] = useState(1)
  const [max, setMax] = useState(20)

  useEffect(() => {
    handleGenerate()
  }, [])

  const handleGenerate = () => {
    if(min > max){
      setMin(max)
    }
    let r = Math.floor(Math.random()*(max-min+1)) + min
    setResult(r)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>Random Number Generator - App Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col gap-2 py-5'>
          <h2 className="text-3xl font-bold text-blue-900">Random Number Generator</h2>
          <section className='flex justify-center gap-5 mt-4'>
            <div>
              <label htmlFor="length">Min: </label>
              <input
                id="min"
                type="number"
                defaultValue={1}
                max={max}
                min={0}
                onChange={e => setMin(parseInt(e.target.value))}
                className='w-12 pl-1'
              />
            </div>
            <div>
              <label htmlFor="length">Max: </label>
              <input
                id="max"
                type="number"
                defaultValue={20}
                max={1000000}
                min={min}
                onChange={e => setMax(parseInt(e.target.value))}
                className='w-12 pl-1'
              />
            </div>
          </section>
          <input
            type="button"
            value="Generate"
            onClick={handleGenerate}
            className="p-1 mt-4 mx-auto w-48 text-center bg-blue-600 text-white rounded-md cursor-pointer"
          />
          <p id="result" className='text-2xl mt-1 font-bold'>{result}</p>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default BinToDec