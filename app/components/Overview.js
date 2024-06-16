"use client"
import { useState, useEffect } from 'react'

import Image from 'next/image'

// Components
import Accounts from './Accounts'
import Tokens from './Tokens'

// Images
import up from '../assets/up.svg'
import down from '../assets/down.svg'
import add from '../assets/add.svg'

const Overview = ({ trackedAccounts, setTrackedAccounts, markets, trackedTokens, setTrackedTokens, tokens }) => {
	const [value, setValue] = useState(0)

	const [isAccountsModalOpen, setIsAccountsModalOpen] = useState(false)
	const [isAddTokensModalOpen, setIsAddTokensModalOpen] = useState(false)	

	const accountsModalHandler = () => {
		setIsAccountsModalOpen(true)
	}

	const addTokensModalHandler = () => {
		if (trackedAccounts.length > 0) {
			setIsAddTokensModalOpen(true)
		} else {
			setIsAccountsModalOpen(true)
		}
	}

	const calculateValue = () => {
		const total = tokens.reduce((acc, token) => {
			return acc + token.value;
		}, 0)

		console.log(total)

		setValue(total)
	}

	useEffect(() => {
		if (tokens.length === 0) {
			setValue(0)
		} else {
			calculateValue()
		}
	})

	return(
		<div className="overview">
			<div className="overview__tracked">
				<h3>Accounts</h3>
				<p>{trackedAccounts.length}</p>
				<button onClick={accountsModalHandler}>
					<Image
						src={add}
						width={20}
						height={20}
						alt="Add account"
					/>
				</button>
			</div>

			<div className="overview__tracked">
				<h3>Tokens</h3>
				<p>{trackedTokens.length}</p>
				<button onClick={addTokensModalHandler}>
					<Image
						src={add}
						width={20}
						height={20}
						alt="Add token"
					/>
				</button>
			</div>

			<div className="overview__tracked">
				<h3>Blockchains</h3>
				<p>0</p>
				<button>
					<Image
						src={add}
						width={20}
						height={20}
						alt="Add blockchain"
					/>
				</button>
			</div>

			<div className="overview__total">
				<h3>Total Value</h3>
				<p>{value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
			</div>

			<div className="overview__change">
			<h3>Change</h3>
				<p>
					<Image
						src={up}
						width={15}
						height={15}
						alt="Change direction"
					/>
					<span className="green">0.00%</span>
				</p>
			</div>

			{isAccountsModalOpen && 
				<Accounts
					setIsAccountsModalOpen={setIsAccountsModalOpen}
					trackedAccounts={trackedAccounts}
					setTrackedAccounts={setTrackedAccounts}
				/>
			}

			{isAddTokensModalOpen &&
				<Tokens 
					setIsAddTokensModalOpen={setIsAddTokensModalOpen}
					markets={markets}
					trackedTokens={trackedTokens}
					setTrackedTokens={setTrackedTokens}
				/>
			}

		</div>
	)
}

export default Overview;
