import axios from 'axios'
import {useHistory} from 'react-router-dom'
import {toast} from 'react-toastify'

import {API_URL} from '../../services/envConfig'
import {checkDuplicateImageId} from '../../services/util/checkDuplicateImageId'

export default function NewBtn({setCards, setTitle, setImageIndex}) {
	let history = useHistory()

	function handleClick(e) {
		e.preventDefault()
		setTitle('')
		setImageIndex(0)
		history.push('/')
		axios
			.get(`${API_URL}/image/6`)
			.then((response) => {
				const {newCards} = checkDuplicateImageId(response.data)
				const tempCards = newCards.map((item) => {
					item.paragraph = ''
					return item
				})
				setCards(tempCards)
			})
			.catch((err) => {
				if (err?.response?.status === 429) {
					toast.dark(
						'The 3rd party API limit for images have been reached 😢. The developer (Kiu) will need money to subscribed to a paid tier of the API to increase image availability.'
					)
					toast.error(err.response.data)
				} else {
					toast.error('An error occurred while requesting an image: ', err)
				}
			})
	}

	return (
		<>
			<button
				type="button"
				className="mybtn mybtn--bottom"
				onClick={handleClick}
			>
				New Project
			</button>
		</>
	)
}
