import axios from 'axios'

class ApiClient {
  constructor() {
    this.project = process.env.REACT_APP_API_PROJECT
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_URL + '/' + this.project
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
}

export default ApiClient
