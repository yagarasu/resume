const PER_PAGE = 9

class PostsService {
  constructor({ ApiClient }) {
    this.client = ApiClient
  }

  normalize(article) {
    const { image, ...rest } = article
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
    const res = await this.client.fetch(`/items/blog?limit=${limit}&offset=${offset}&fields=${fields}&meta=${meta}`, 'GET')

    const articles = res.data.data.map(this.normalize)
    const total = res.data.meta.total_count

    return {
      articles,
      total
    }
  }

  async single(id) {
    const fields = '*,image.data.*'
    const res = await this.client.fetch(`/items/blog/${id}?fields=${fields}`, 'GET')
    return this.normalize(res.data.data)
  }
}

export default PostsService
