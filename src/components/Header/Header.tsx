import { FC, useEffect, useState } from 'react'
import { Unsplash } from '../../service/Unsplash'
import { Random } from 'unsplash-js/dist/methods/photos/types';
import { HeaderProps } from './types'
import './Header.scss'

const Header: FC<HeaderProps> = () => {

	const [randomPhoto, setRandomPhoto] = useState<Random | any>(null)

	useEffect(() => {
		Unsplash.photos.getRandom({}).then(({ response }) => {
			setRandomPhoto(response)
		}).catch(() => {
			console.log("something went wrong!");
		});
	}, [])

	const bgImage = randomPhoto?.urls?.regular
	const bgColor = randomPhoto?.color

	return (
		<div className="Header">
			<div className="Header__Image" style={{ backgroundColor: bgColor }}>
				<picture className='Header__Image-Bg'>
					<source srcSet={bgImage} media="(min-width: 600px)" />
					<img src={bgImage} alt="" />
				</picture>
			</div>
			<div className='Header__SearchWrapper'>
				<div className='Header__TitleAndSearchWrapper'>
					<div className='Header__TitleAndSearchWrapper-Content'>
						<div className='Header__TitleWrapper'>
							<h1>Unsplash</h1>
							<div className='Header__TitleWrapper-Description'>
								The internet’s source of freely-usable images.<br />
								Powered by creators everywhere.
							</div>
						</div>
						<div className='Header__Search'>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header