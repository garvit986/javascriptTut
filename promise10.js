const url1 = 'https://fakestoreapi.com/products/1';
const url2 = ["https://fakesoreapi.com/products/2", "https://fakestoreapi.com/products/3"];

const resp = [];

const conditionalChaining = (url1, url2) => {
  return fetch(url1)
    .then(res => res.json())
    .then(firstData => {
      resp.push(firstData);
      // If the first fetch is successful, fetch the first URL in url2
      return fetch(url2[0])
        .then(secRes => secRes.json())
        .then(secondData => {
          resp.push(secondData);
          return resp;
        });
    })
    .catch(err => {
      // If the first fetch fails, fetch the second URL in url2
      return fetch(url2[1])
        .then(secRes => secRes.json())
        .then(fallbackData => {
          resp.push(fallbackData);
          return resp;
        });
    });
}

conditionalChaining(url1, url2)
  .then(result => console.log('Fetched data:', result))
  .catch(err => console.log('Error:', err.message));
