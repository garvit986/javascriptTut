const fetchWithFallback = async (urls) => {
	const resp = await Promise.allSettled(urls.map(url => fetch(url).then(response => response.json())));

	const successfulResults = resp
		.filter(result => result.status === 'fulfilled')
		.map(result => result.value);

	if (successfulResults.length > 0) {
		return { successfulResults, "failedCount": urls.length - successfulResults.length, "successCount": successfulResults.length };
	} else {
		throw new Error('All fetch requests failed.');
	}
};

const urls = ['https://fakestoreapi.com/products/1', "https://fakesoreapi.com/products/2" ,"https://fakestoreapi.com/products/3"]


fetchWithFallback(urls)
	.then(results => console.log('Successful fetch results:', results))
	.catch(error => console.error('Error:', error.message));