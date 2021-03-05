class ContactService {
  constructor({ ApiClient }) {
    this.client = ApiClient
  }

  sendContactForm(values) {
    return this.client.fetch('/contact', 'POST', values)
  }
}

export default ContactService
