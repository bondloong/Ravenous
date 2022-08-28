import React, { FC } from 'react'
import { IBusinesses } from '../../interfaces/buisness.interfaces'
import Business from '../Business/Business'
import './BusinessList.css'

type Props = {
	businesses: IBusinesses
}

const BusinessList: FC<Props> = ({ businesses }) => {
	return <div className="BusinessList">
		{
			businesses.map(business => <Business business={business} />)
		}

	</div>
}

export default BusinessList