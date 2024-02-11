import React from 'react'
import Player from './Player'
import Players from './Players'

function App() {
  return (
    <div>
     {
      Players.map(e=><Player info={e}/> )
     }
    </div>
  )
}

export default App
