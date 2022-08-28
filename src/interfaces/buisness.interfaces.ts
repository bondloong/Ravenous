export interface IBusiness {
	"imageSrc": string,
	"name": string,
	"address": string,
	"city": string,
	"state": string,
	"zipCode": string,
	"category": string,
	"rating": number,
	"reviewCount": number
}

export type IBusinesses = IBusiness[]

export interface ISortByOptions {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'
}