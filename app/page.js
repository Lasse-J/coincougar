"use client"
import { useState, useEffect } from 'react'

// Components
import Overview from './components/Overview'

// Snapshot Data
import marketSnapshot from './snapshots/markets.json'
import tokensSnapshot from './snapshots/tokens.json'
import pricesSnapshot from './snapshots/prices.json'

export default function Home() {

  const [trackedAccounts, setTrackedAccounts] = useState([])
  const [trackedTokens, setTrackedTokens] = useState([])

  const [markets, setMarkets] = useState(null)

  const getMarkets = async () => {
    // TODO: Make API call to fetch market data FROM ALL BLOCKCHAINS
    setMarkets(marketSnapshot)
  }

  const getToken = async () => {
    // Fetch token info and bind it together
    const id = trackedTokens[trackedTokens.length - 1]

    // Individual market data for each token
    const market = markets.find((market) => market.id === id)

    // Token details TODO: MULTIPLE BLOCKCHAINS WITH ADVANCED API!!
    const tokenSnapshot = tokensSnapshot.find((token) => token.id === id)
    const details = tokenSnapshot.detail_platforms.ethereum

    // Prices
    const prices = pricesSnapshot[id]

    // Balances
    const balanceSnapshot = {
      'ethereum': 1.4242424224,
      'usd-coin': 250.212322,
      'tether': 100
    }
    const balance = balanceSnapshot[id]

    // Build a TOKEN OBJECT to use throughout the app
    const token = {
      id: id,
      market: market,
      address: details ? details.contract_address : null,
      prices: prices,
      balance: balance,
      value: market.current_price * balance
    }

    console.log("token", token)

  }

  useEffect(() => {
    if(!markets) {
      getMarkets()  
    }

    if(trackedTokens.length !== 0) {
      getToken()  
    }
  }, [trackedTokens])

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
