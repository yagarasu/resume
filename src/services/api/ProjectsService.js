class ProjectsService {
  constructor({ ApiClient }) {
    this.client = ApiClient
  }

  async list() {
    const res = await this.client.fetch(`/projects`, 'GET')
    const projects = res.data
    const total = res.headers['x-total-count']
    return {
      projects,
      total
    }
  }
}

export default ProjectsService
