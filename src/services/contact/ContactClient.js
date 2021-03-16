import axios from 'axios'

class ContactClient {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_CONTACT_URL
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

export default ContactClient
