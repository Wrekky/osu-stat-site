import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { PlayGraph } from './components/graphs/PlayGraph'
import { PpGraph } from './components/graphs/PpGraph'
import { TagsGraph } from './components/graphs/TagsGraph'
import { TopBar } from './components/TopBar'
import './App.css'

function App() {

  return (
    <main>
      <div className="flex justify-center m-8">
        <TopBar />
      </div>
      
      <div className="flex justify-center">
        <PlayGraph />
      </div>
      <div className="flex justify-center">
        <PpGraph />
      </div>
      <div className="flex justify-center">
        <TagsGraph />
      </div>
    </main>
  )
}

export default App
