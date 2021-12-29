import React, { FC } from 'react'
import './App.scss'
import { Button } from 'antd-mobile'

const App: FC = () => {
  const x = (a: number) => {
    return a === 1
  }
  return (
    <div className="App">
      <header className="App-header">
        123
        <Button color="primary" onClick={() => x}>
          Primary
        </Button>
        123
      </header>
    </div>
  )
}

export default App
