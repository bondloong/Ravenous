/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState, MouseEvent, ChangeEvent } from 'react'
import { IBusinesses, ISortByOptions } from '../../interfaces/buisness.interfaces'
import { isObjKey } from '../../utils/utils'
import { Yelp } from '../../utils/Yelp'
import './SearchBar.css'

type Props = {
	setBusinesses: React.Dispatch<React.SetStateAction<IBusinesses>>
}


const sortByOptions: ISortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
}

const SearchBar: FC<Props> = ({ setBusinesses }): JSX.Element => {
	const [term, setTerm] = useState<string>("")
	const [location, setLocation] = useState<string>("")
	const [sortBy, setSortBy] = useState<ISortByOptions[keyof ISortByOptions]>(sortByOptions['Best Match'])

	const getSortByClass = (sortOption: string) => {
		if (sortOption === sortBy) {
			return 'active'
		}
		return ''
	}

	const searchYelp = async ({ term, location, sortBy }: { term: string, location: string, sortBy: ISortByOptions[keyof ISortByOptions] }) => {
		setBusinesses(await Yelp.search({ term, location, sortBy }))
	}

	const handleSortByChange = (sortOption: ISortByOptions[keyof ISortByOptions]) => {
		setSortBy(sortOption)
	}

	const handleTermChange = (event: ChangeEvent<HTMLInputElement>) => {
		setTerm(event.target.value)
	}

	const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => {
		setLocation(event.target.value)
	}

	const handleSearch = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
		event.preventDefault()
		if (!location) {
			alert("Where?")
		} else {
			searchYelp({ term, location, sortBy })
		}
	}

	const renderSortByOptions = () => {
		return Object.keys(sortByOptions).map(sortByOption => {
			if (isObjKey(sortByOption, sortByOptions)) {
				let sortByOptionValue = sortByOptions[sortByOption];
				return <li key={sortByOptionValue} onClick={() => handleSortByChange(sortByOptionValue)} className={getSortByClass(sortByOptionValue)}>
					{sortByOption}
				</li>
			}
			return <></>
		})
	}

	return <div className="SearchBar">
		<div className="SearchBar-sort-options">
			<ul>
				{renderSortByOptions()}
			</ul>
		</div>
		<div className="SearchBar-fields">
			<input placeholder="Search Businesses" value={term} onChange={(event) => handleTermChange(event)} />
			<input placeholder="Where?" value={location} onChange={(event) => handleLocationChange(event)} />
		</div>
		<div className="SearchBar-submit">
			<a onClick={(event) => handleSearch(event)}>Let's Go</a>
		</div>
	</div>
}

export default SearchBar