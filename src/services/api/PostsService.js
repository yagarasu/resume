class PostsService {
  constructor({ ApiClient }) {
    this.client = ApiClient
  }

  async list(page) {
    const res = await this.client.fetch(`/posts?_page=${page}`, 'GET')
    const articles = res.data
    const total = res.headers['x-total-count']
    return {
      articles,
      total
    }
  }

  async single(id) {
    const res = await this.client.fetch(`/posts/${id}`, 'GET')
    const article = res.data
    return article
  }
}

export default PostsService
