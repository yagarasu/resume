import axios from 'axios'

class ApiClient {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_URL
    })
  }

  fetch(url, method = 'GET', data = null, extra = {}) {
    return this.client.request({
      url,
      method,
      data,
      ...extra
    })
  }

  buildImageUrl(filename) {
    return `${process.env.REACT_APP_API_URL}/assets/${filename}`
  }
}

export default ApiClient
