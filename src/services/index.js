import { createContainer, asClass } from 'awilix'
import ApiClient from './api/ApiClient'
import PostsService from './api/PostsService'
import ProjectsService from './api/ProjectsService'
import ContactClient from './contact/ContactClient'
import ContactService from './contact/ContactService'

function buildContainer() {
  const container = createContainer()
  container.register({
    ApiClient: asClass(ApiClient).singleton(),
    PostsService: asClass(PostsService).singleton(),
    ProjectsService: asClass(ProjectsService).singleton(),
    ContactClient: asClass(ContactClient).singleton(),
    ContactService: asClass(ContactService).singleton()
  })
  window.di = container
  return container
}

export default buildContainer
