import React, { FC, useState } from 'react'
import { ISortByOptions } from '../../interfaces/buisness.interfaces'
import { isObjKey } from '../../utils/utils'
import './SearchBar.css'

type Props = {}


const sortByOptions: ISortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
}

const SearchBar: FC<Props> = (props): JSX.Element => {
	const [term, setTerm] = useState("")
	const [location, setLocation] = useState("")
	const [sortBy, setSortBy] = useState<ISortByOptions[keyof ISortByOptions]>(sortByOptions['Best Match'])

	const getSortByClass = (sortOption: string) => {
		if (sortOption === sortBy) {
			return 'active'
		}
		return ''
	}

	const handleSortByChange = (sortOption: ISortByOptions[keyof ISortByOptions]) => {
		setSortBy(sortOption)
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
			<input placeholder="Search Businesses" />
			<input placeholder="Where?" />
		</div>
		<div className="SearchBar-submit">
			<a>Let's Go</a>
		</div>
	</div>
}

export default SearchBar