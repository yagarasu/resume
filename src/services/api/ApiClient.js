import DirectusSDK from "@directus/sdk-js"

class ApiClient {
  constructor() {
    this.client = new DirectusSDK({
      url: process.env.REACT_APP_API_URL,
      project: process.env.REACT_APP_API_PROJECT,
      storage: window.localStorage
    })
  }
}

export default ApiClient
