class ContactService {
  constructor({ ContactClient }) {
    this.client = ContactClient
  }

  sendContactForm(values) {
    return this.client.fetch('/contact', 'POST', values)
  }
}

export default ContactService
