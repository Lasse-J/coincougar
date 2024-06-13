import Image from 'next/image'

// Images
import close from '../assets/close.svg'

const Accounts = ({ setIsAccountsModalOpen, trackedAccounts, setTrackedAccounts }) => {

	const closeHandler = () => {
		setIsAccountsModalOpen(false)
	}

	const accountsHandler = (e) => {
		e.preventDefault()
		setTrackedAccounts([...trackedAccounts, e.target.accounts.value])
		setIsAccountsModalOpen(false)
	}

	return(
		<div className="popup">
			<div className="popup__content accounts">
				<h3>Add Accounts</h3>

				<button onClick={closeHandler}>
					<Image
						src={close}
						width={15}
						height={15}
						alt="Close popup"
					/>
				</button>

				<form onSubmit={accountsHandler}>
					<label htmlFor="accounts">Enter EVM Address</label>
					<input
						type="text"
						name="accounts"
						id="accounts"
						placeholder="0x0000000000000000000000000000000000000000"
					></input>
					<input
						type="submit"
					></input>
				</form>
				{console.log(trackedAccounts)}
			</div>
		</div>
	)
}

export default Accounts;
