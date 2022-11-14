'use client'

import React, { useContext, useState } from 'react'

const CounterContext = React.createContext({
  counter: 0,
  setCounter: () => {},
} as any)

const Counter = () => {
  const { counter } = useContext(CounterContext)
  return <p>Count: {counter}</p>
}

const IncrementButton = () => {
  const { counter, setCounter } = useContext(CounterContext)
  return <button onClick={() => setCounter(counter + 1)}>Increment</button>
}

export default function ContextWrapper() {
  const [counter, setCounter] = useState(0)
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <Counter />
      <IncrementButton />
    </CounterContext.Provider>
  )
}
