import moment from 'moment'

const PER_PAGE = 9

class PostsService {
  constructor({ ApiClient }) {
    this.client = ApiClient
  }

  normalize(article) {
    const { image, date_created, ...rest } = article
    return {
      ...rest,
      date: moment(date_created).format('dddd, D MMMM YYYY hh:mm a'),
      image: this.client.buildImageUrl(image)
    }
  }

  async list(page) {
    const limit = PER_PAGE
    const offset = (page - 1) * PER_PAGE
    const filter = '&filter[status][_eq]=published'
    const meta = 'filter_count'
    const res = await this.client.fetch(`/items/blog?limit=${limit}&offset=${offset}${filter}&meta=${meta}`, 'GET')

    const articles = res.data.data.map(this.normalize.bind(this))
    const total = res.data.meta.fitler_count

    return {
      articles,
      total
    }
  }

  async single(id) {
    const res = await this.client.fetch(`/items/blog/${id}`, 'GET')
    return this.normalize(res.data.data)
  }
}

export default PostsService
