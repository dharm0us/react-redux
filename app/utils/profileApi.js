const ENDPOINT = 'https://demo7470808.mockable.io/abc'
export function getProfiles() {
		return fetch(ENDPOINT)
			.then(res => res.json())
			.catch(err => {console.log(err)})

}
