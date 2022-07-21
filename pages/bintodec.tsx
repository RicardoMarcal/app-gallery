import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const BinToDec: NextPage = () => {
  const [result, setResult] = useState(0)

  const verifyInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key.match(/^[0-1]+$/g) === null && e.key !== "Backspace" && e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.ctrlKey === false){
      e.preventDefault()
      alert("You can only type 0 or 1")
    }
  }

  const handleConvert = (e: React.ChangeEvent<HTMLInputElement>) => {
    let r = 0
    let bin = e.target.value
    for(let i = 0; i < bin.length; i++){
      r += parseInt(bin[i])*Math.pow(2, bin.length-i-1)
    }
    setResult(r)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>BinToDec - App Gallery</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col gap-2 py-5'>
          <h2 className="text-3xl font-bold text-blue-900">BinToDec</h2>
          <input
            type="text"
            onKeyDown={verifyInput}
            onChange={handleConvert}
            className="p-1 mt-5 text-center bg-slate-100 rounded-md"
          />
          <p id="result" className='text-2xl'>{result}</p>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default BinToDec