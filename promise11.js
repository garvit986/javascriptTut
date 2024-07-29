const urls = [
    'https://fakestoreapi.com/products/1',
    'https://fakesoreapi.com/products/2',
    'https://fakestoreapi.com/products/3'
];

const batchFetch = async (urls, batchSize) => {
    const responses = [];
    for (let i = 0; i < urls.length; i += batchSize) {
        const batch = urls.slice(i, i + batchSize);
        try {
            const batchResponses = await Promise.all(batch.map(async (url) => {
                try {
                    const res = await fetch(url);
                    if (!res.ok) {
                        return { message: "failed", status: res.status };
                    }
                    return res.json();
                } catch (error) {
                    return { message: "fetch error", error: error.message };
                }
            }));
            responses.push(...batchResponses);
        } catch (error) {
            // Handle errors that occur during batch processing
            console.error("Batch fetch error:", error);
        }
    }
    return responses;
}

batchFetch(urls, 2).then((result) => {
    console.log(result);
}).catch((err) => {
    console.error("Batch fetch failed:", err);
});
