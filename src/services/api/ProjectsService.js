const PER_PAGE = 8

class ProjectsService {
  constructor({ ApiClient }) {
    this.client = ApiClient
  }

  normalize(project) {
    const { image, ...rest } = project
    return {
      ...rest,
      image: image.data.full_url
    }
  }

  async list(page) {
    const limit = PER_PAGE
    const offset = (page - 1) * PER_PAGE
    const fields = '*,image.data.*'
    const meta = 'total_count,status_count'
    const res = await this.client.fetch(`/items/projects?limit=${limit}&offset=${offset}&fields=${fields}&meta=${meta}`, 'GET')

    const projects = res.data.data.map(this.normalize)
    const total = res.data.meta.total_count

    return {
      projects,
      total
    }
  }
}

export default ProjectsService
