import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const characters = {
  uppercase: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  lowercase: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  symbols: ['!', '@', '#', '$', '%', '&', '*', '(', ')', '[', ']', '{', '}', '<', '>', '~', '^', '/', '?', ''],
}

const PasswordGenerator: NextPage = () => {
  const [password, setPassword] = useState('')
  const [uppercaseFlag, setUppercaseFlag] = useState(true)
  const [lowercaseFlag, setLowercaseFlag] = useState(true)
  const [numbersFlag, setNumbersFlag] = useState(true)
  const [symbolsFlag, setSymbolsFlag] = useState(true)
  const [length, setLength] = useState(20)

  useEffect(() => {
    handleGenerate()
  }, [])
  

  const handleGenerate = () => {
    let pw: string = ''
    let aux = length
    for(let i = 1; i <= aux; i++){
      if(i % 4 === 0 && uppercaseFlag){
        pw += characters.uppercase[Math.floor(Math.random()*characters.uppercase.length)]
      }else if(i % 3 === 0 && lowercaseFlag){
        pw += characters.lowercase[Math.floor(Math.random()*characters.lowercase.length)]
      }else if(i % 2 === 0 && numbersFlag){
        pw += characters.numbers[Math.floor(Math.random()*characters.numbers.length)]
      }else if(symbolsFlag){
        pw += characters.symbols[Math.floor(Math.random()*characters.symbols.length)]
      }else{
        aux++
      }
    }
    pw = [...pw].sort(() => 0.5 - Math.random()).join('')
    setPassword(pw)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Copied to clipboard!')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>App Gallery - Password Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col items-center gap-2 py-5'>
          <h2 className="text-3xl font-bold text-blue-900">Password Generator</h2>
          <div className="flex justify-between p-1 mt-5 w-72 text-center bg-slate-100 rounded-md">
            <p id="password" className='px-2'>{password}</p>
            <button onClick={copyToClipboard} className='border-l-2'>📝</button>
          </div>
          <section className='flex flex-col gap-2 mt-2 items-start w-52'>
            <div>
              <label htmlFor="length">Password Length: </label>
              <input
                id="length"
                type="number"
                defaultValue={20}
                max={20}
                min={4}
                onChange={e => setLength(parseInt(e.target.value))}
                className='w-12 pl-1'
              />
            </div>
            <div>
              <label htmlFor="uppercase">Uppercase Letters: </label>
              <input
                id="uppercase"
                type="checkbox"
                defaultChecked={true}
                onClick={e => setUppercaseFlag((e.target as HTMLInputElement).checked)}
              />
            </div>
            <div>
              <label htmlFor="lowercase">Lowercase Letters: </label>
              <input
                id="lowercase"
                type="checkbox"
                defaultChecked={true}
                onClick={e => setLowercaseFlag((e.target as HTMLInputElement).checked)}
              />
            </div>
            <div>
              <label htmlFor="numbers">Numbers: </label>
              <input
                id="numbers"
                type="checkbox"
                defaultChecked={true}
                onClick={e => setNumbersFlag((e.target as HTMLInputElement).checked)}
              />
            </div>
            <div>
              <label htmlFor="symbols">Symbols: </label>
              <input
                id="symbols"
                type="checkbox"
                defaultChecked={true}
                onClick={e => setSymbolsFlag((e.target as HTMLInputElement).checked)}
              />
            </div>
          </section>

          <input
            type="button"
            value="Generate Password"
            onClick={handleGenerate}
            className="p-1 mt-5 w-48 text-center bg-blue-600 text-white rounded-md cursor-pointer"
          />
        </div>
      </main>

      <Footer/>
    </div>
  )
}

export default PasswordGenerator