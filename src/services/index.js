import { createContainer, asClass } from 'awilix'
import ApiClient from './api/ApiClient'
import ContactService from './api/ContactService'
import PostsService from './api/PostsService'

function buildContainer() {
  const container = createContainer()
  container.register({
    ApiClient: asClass(ApiClient).singleton(),
    ContactService: asClass(ContactService).singleton(),
    PostsService: asClass(PostsService).singleton()
  })
  window.di = container
  return container
}

export default buildContainer
