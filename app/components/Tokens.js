import Image from 'next/image'

// Images
import close from '../assets/close.svg'

const Tokens = ({ setIsAddTokensModalOpen, markets, trackedTokens, setTrackedTokens }) => {

	const closeHandler = () => {
		setIsAddTokensModalOpen(false)
	}

	const tokenHandler = (e) => {
		e.preventDefault()
		setTrackedTokens([...trackedTokens, e.target.tokens.value])
		setIsAddTokensModalOpen(false)
	}

	return(
		<div className="popup">
			<div className="popup__content add">
				<h3>Add Tokens</h3>

				<button onClick={closeHandler}>
					<Image
						src={close}
						height={15}
						weight={15}
						alt="Close popup"
					/>
				</button>

				<form onSubmit={tokenHandler}>
					<label htmlFor="tokens">Select a Token</label>
					<select name="tokens" id="tokens">
						{markets && (
							markets.map((market, index) => (
								<option key={index} value={market.id}>{market.symbol.toUpperCase()}</option>
							))
						)}
					</select>
					<input type="submit" />
				</form>
			</div>
		</div>
	)
}

export default Tokens;
