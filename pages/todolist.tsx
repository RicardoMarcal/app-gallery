import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

interface item{
  id: Number,
  text: String,
  done: Boolean
}

const BinToDec: NextPage = () => {
  const [id, setId] = useState(0)
  const [items, setItems] = useState([] as item[])

  const addTodo = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    const input = document.getElementById('input') as HTMLInputElement
    if(input.value.trim().length !== 0){
      setItems([...items, {
        id: id,
        text: input?.value,
        done: false
      }])
      setId(id+1)
    }
    input.value = ''
    input.focus()
  }

  const deleteTodo = (id: Number) => {
    setItems([...items.filter((item) => item.id !== id)])
  }

  const doTodo = (id: Number) => {
    setItems([...items.map((item) => {
      if(item.id !== id){
        return item
      }
      return {
        id: item.id,
        text: item.text,
        done: !item.done
      }
    })])
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-slate-300">
      <Head>
        <title>App Gallery - To Do List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-3 text-center">
        <Header/>

        <div className='flex flex-col gap-2 py-5'>
          <h2 className="text-3xl font-bold text-blue-900">To Do List</h2>
          <form onSubmit={addTodo}>
            <input
              type="text"
              id="input"
              className="py-1 px-2 mt-5 bg-slate-100 rounded-md"
            />
            <button
              className='p-1 ml-2 bg-blue-600 text-white rounded-md cursor-pointer'
            >
              Add
            </button>
          </form>
          
          <section className='flex flex-col justify-start mt-4 gap-1'>
            {items.map(({id, text, done}, key) => (
              <div key={key} className='flex bg-slate-200 p-1 rounded-sm gap-2'>
                <p
                  onClick={() => deleteTodo(id)}
                  className='cursor-pointer border-r-2 border-slate-300 pr-1'
                >
                  🗑️
                </p>
                <p
                  className={`cursor-pointer w-full text-left ${done ? 'opacity-40 line-through' : ''}`}
                  onClick={() => doTodo(id)}
                >
                  {text}
                </p>
              </div>
            ))}
          </section>
        </div>

      </main>

      <Footer/>
    </div>
  )
}

export default BinToDec