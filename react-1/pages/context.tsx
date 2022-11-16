import React, { useContext, useState } from 'react'

const CounterContext = React.createContext({
  counter: 0,
  setCounter: () => {},
} as any)

const Counter = () => {
  const { counter } = useContext(CounterContext)
  return (
    <div className="border p-6 bg-indigo-600/30">
      <p className="pb-2">Counter container</p>
      <p>Count: {counter}</p>
    </div>
  )
}

const IncrementButton = () => {
  const { counter, setCounter } = useContext(CounterContext)
  return (
    <div className="border p-6 bg-blue-500/30">
      <p className="pb-2">Button container</p>
      <button
        className="border px-2 bg-blue-300 hover:bg-blue-400"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  )
}

export default function ContextWrapper() {
  const [counter, setCounter] = useState(0)
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <div className="flex justify-center items-center h-full">
        <div className="flex items-center gap-4 border p-6 bg-green-600/30">
          <p className="pb-2">Context Provider </p>
          <Counter />
          <IncrementButton />
        </div>
      </div>
    </CounterContext.Provider>
  )
}
