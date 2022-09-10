const axios = require('axios').default;
const fetchdatafromAPI = async (sku_id) => {
    const instanceAPI = axios.create({
      baseURL:'https://ppe-api.lotuss.com/proc/product/api/v1/products/details​',
      params: {
        websiteCode:thailand_hy,
        sku:sku_id,
        storeId:5016
      },
      headers:{
        'accept-language':'en',
        'Authorization':`BasicZWY4ZTZjMjgzODdlNGVjYTlkM2UxMTU1MDQxMjgyYzE6MEU1NTg0QzUxZTdBNDBEODkzMDUxZGExY2NEQTg2ZTY=​`,
      },
      
    }
    )
    return instanceAPI
  };
  console.log(fetchdatafromAPI(3302997).then(res=>{console.log(res)}).catch(()=>{}))