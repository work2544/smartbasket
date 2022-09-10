// const axios = require('axios');

// const LotusInstanceAPI = async sku_id => {
//   const instanceAPI = axios.create({
//     baseURL: 'https://ppe-api.lotuss.com',
//     params: {
//       websiteCode: 'thailand_hy',
//       sku: sku_id,
//       storeId: 5016,
//     },
//     headers: {
//       'accept-language': 'en',
//       Authorization:
//         'Basic ZWY4ZTZjMjgzODdlNGVjYTlkM2UxMTU1MDQxMjgyYzE6MEU1NTg0QzUxZTdBNDBEODkzMDUxZGExY2NEQTg2ZTY=',
//     },
//   });
//   return await instanceAPI.get('/proc/product/api/v1/products/details');
// };
// const getAPI = async () => {
//   const resp=await LotusInstanceAPI(3302997)
//    console.log(resp.data.data.priceRange.minimumPrice.regularPrice)
//    console.log(resp.data.data.mediaGallery[0].url)
// };

// getAPI();

import fetch from "node-fetch";
fetch("./employees.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
const data = require('src\\database\\databse.json');
console.log(data)