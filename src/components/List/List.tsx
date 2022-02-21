import { FC, useState, useEffect } from 'react'
import { Basic } from 'unsplash-js/dist/methods/users/types'
import { Unsplash } from '../../service/Unsplash'
import Gallery from '../Gallery'
import { ListProps } from './types'

const List: FC<ListProps> = () => {
	const [list, setList] = useState<Basic[] | any>()

	useEffect(() => {
		Unsplash.photos.list({ page: 1, perPage: 15 }).then(({ response }) => {
			setList(response?.results)
		}).catch(() => {
			console.log("something went wrong!");
		});
	}, [])

	console.log('list', list)

	return (
		<Gallery imageList={list} />
	)
}

export default List