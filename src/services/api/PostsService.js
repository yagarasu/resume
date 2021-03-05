const PER_PAGE = 9

class PostsService {
  constructor({ ApiClient }) {
    this.client = ApiClient.client
  }

  async list(page) {
    const limit = PER_PAGE
    const offset = (page - 1) * PER_PAGE
    const res = await this.client.getItems('blog', {
      limit,
      offset,
      fields: '*,image.data.*',
      meta: 'total_count,status_count'
    })
    const articles = res.data.map(article => ({ ...article, image: article.image.data.full_url }))
    const total = res.meta.total_count
    return {
      articles,
      total
    }
  }

  async single(id) {
    const res = await this.client.getItem('blog', id, {
      fields: '*,image.data.*'
    })
    const article = { ...res.data, image: res.data.image.data.full_url }
    return article
  }
}

export default PostsService
