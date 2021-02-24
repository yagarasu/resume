import awilix, { asClass } from 'awilix'
import ApiClient from './api/ApiClient'
import ContactService from './api/ContactService'

function buildContainer() {
  const container = awilix.createContainer()
  container.register({
    ApiClient: asClass(ApiClient).singleton(),
    ContactService: asClass(ContactService).singleton()
  })
  return container
}

export default buildContainer
