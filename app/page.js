"use client"
import { useState } from 'react'

// Components
import Overview from './components/Overview'

// Snapshot Data
import marketSnapshot from './snapshots/markets.json'

export default function Home() {

  const [trackedAccounts, setTrackedAccounts] = useState([])
  const [trackedTokens, setTrackedTokens] = useState([])

  const [markets, setMarkets] = useState(marketSnapshot)

  return (
    <main>
      <h2>Portfolio Overview</h2>

      <Overview
        trackedAccounts={trackedAccounts}
        setTrackedAccounts={setTrackedAccounts}
        markets={markets}
        trackedTokens={trackedTokens}
        setTrackedTokens={setTrackedTokens}
      />

      <div className="details">
        <div className="divider"></div>

      </div>
    </main>
  )
}
