"use client"
import { useState } from 'react'

// Components
import Overview from './components/Overview'

export default function Home() {

  const [trackedAccounts, setTrackedAccounts] = useState([])

  return (
    <main>
      <h2>Portfolio Overview</h2>

      <Overview
        trackedAccounts={trackedAccounts}
        setTrackedAccounts={setTrackedAccounts}
      />

      <div className="details">
        <div className="divider"></div>

      </div>
    </main>
  )
}
