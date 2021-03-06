class ContactService {
  constructor({ ApiClient }) {
    this.client = ApiClient
  }

  sendContactForm(values) {
    return this.client.fetch('/items/contact', 'POST', values)
  }
}

export default ContactService
