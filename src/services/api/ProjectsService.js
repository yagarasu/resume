const PER_PAGE = 9

class ProjectsService {
  constructor({ ApiClient }) {
    this.client = ApiClient.client
  }

  async list(page) {
    const limit = PER_PAGE
    const offset = (page - 1) * PER_PAGE
    const res = await this.client.getItems('projects', {
      limit,
      offset,
      fields: '*,image.data.*',
      meta: 'total_count,status_count'
    })
    const projects = res.data
    const total = res.meta.total_count
    return {
      projects,
      total
    }
  }
}

export default ProjectsService
