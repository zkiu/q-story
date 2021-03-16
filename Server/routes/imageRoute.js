const express = require('express')
const imageRoute = express.Router()

const getImage = require('../services/apiExternal/getImage')

imageRoute.get('/', (req, res) => {
	getImage()
		.then((response) => {
			// save respond in firestore, then return a copy
			res.send(response[0])
		})
		.catch((err) => {
			console.error('An error occurred while requesting an image: ', err)
			res.status(400).json({error})
		})
})

imageRoute.get('/:count', (req, res) => {
	const {count} = req.params
	/*******************************************************************/
	// Promise.all(Array(count).fill(getImage())).then((response) => {
	// 	res.send(response)
	// })
	/*******************************************************************/
	getImage(count)
		.then((response) => {
			// TODO:  save respond in firestore?? maybe.
			res.send(response)
		})
		.catch((err) => {
			console.error('An error occurred while requesting an image: ', err)
			res.status(400).json({error})
		})
})

module.exports = imageRoute
