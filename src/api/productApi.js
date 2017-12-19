import axios from 'axios';
const API = 'http://localhost:3001/api/wheels';

class ProductApi {
  static loadProductsFromServer() {
    return axios.get(API)
    // return fetch(API)
      .then(res => {
        return res.data
      })
      .catch(err => {
        return err
      })
  }
}

export default ProductApi;