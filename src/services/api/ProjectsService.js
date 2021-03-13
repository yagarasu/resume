const PER_PAGE = 8

class ProjectsService {
  constructor({ ApiClient }) {
    this.client = ApiClient
  }

  normalize(project) {
    const { image, ...rest } = project
    return {
      ...rest,
      image: this.client.buildImageUrl(image)
    }
  }

  async list(page = 0) {
    const limit = PER_PAGE
    const offset = ((page - 1) * PER_PAGE) || 0
    const filter = '&filter[status][_eq]=published'
    const meta = 'filter_count'
    const res = await this.client.fetch(`/items/project?limit=${limit}&offset=${offset}${filter}&meta=${meta}`, 'GET')

    const projects = res.data.data.map(this.normalize.bind(this))
    const total = res.data.meta.fitler_count

    return {
      projects,
      total
    }
  }
}

export default ProjectsService
