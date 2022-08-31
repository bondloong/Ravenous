import React, { FC } from 'react'
import { IBusiness } from '../../interfaces/buisness.interfaces'
import './Business.css'

type Props = {
	business: IBusiness
}


const Business: FC<Props> = ({ business }) => {
	return <div className="Business">
		<div className="image-container">
			<img src={business.image_url} alt='' />
		</div>
		<h2>{business.name}</h2>
		<div className="Business-information">
			<div className="Business-address">
				<p>{business.location.address1}</p>
				<p>{business.location.city}</p>
				<p>{business.location.state} {business.location.zip_code}</p>
			</div>
			<div className="Business-reviews">
				{
					business.categories.map((category) => <div key={category.alias}>
						<h3>{category.title}</h3>
					</div>)
				}
				<h3 className="rating">{business.rating} stars</h3>
				<p>{business.rating} reviews</p>
			</div>
		</div>
	</div>
}

export default Business