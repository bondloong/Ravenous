import { ISortByOptions } from '../interfaces/buisness.interfaces';

export const apiKey: string = "d125hlu_BLKiCzpXanN0zZ6VykiSgLmPSO2nqqLq5eJ4xmeYCotOlYIHlvhTjjgFuCN4mW4pIAgEaBmyjQh9-QECYugoViDMy04xgCyuna-Yps33RYqnxetDAgSiXnYx";

export const Yelp = {
	search({ term, location, sortBy }: { term: string, location: string, sortBy: ISortByOptions[keyof ISortByOptions] }) {
		return fetch(
			`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
			{
				headers: {
					Authorization: `Bearer ${apiKey}`
				}
			})
			.then(response => response.json())
			.then(jsonResponse => {
				if (jsonResponse.businesses) {
					return jsonResponse.businesses
				}
			})
	}
}

