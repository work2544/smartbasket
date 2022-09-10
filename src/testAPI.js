const axios = require('axios');

const LotusInstanceAPI = async sku_id => {
  const instanceAPI = axios.create({
    baseURL: 'https://ppe-api.lotuss.com',
    params: {
      websiteCode: 'thailand_hy',
      sku: sku_id,
      storeId: 5016,
    },
    headers: {
      'accept-language': 'en',
      Authorization:
        'Basic ZWY4ZTZjMjgzODdlNGVjYTlkM2UxMTU1MDQxMjgyYzE6MEU1NTg0QzUxZTdBNDBEODkzMDUxZGExY2NEQTg2ZTY=',
    },
  });
  return  instanceAPI.get('/proc/product/api/v1/products/details');
};
const getAPI = async () => {
 // const resp1=await axios.get('https://ppe-api.lotuss.com/proc/product/api/v1/products/details?websiteCode=thailand_hy&sku=51202528&storeId=5016')
  const resp=await LotusInstanceAPI(3302997)
//  const temp=JSON.stringify(resp.data)
   console.log(resp.data.data.priceRange)
 //  console.log(temp.)
};

getAPI();
