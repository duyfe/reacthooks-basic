import apiService from "./apiService"
import queryString from 'query-string'

const defaultParams = {
  _page: 1,
  _limit: 10,
  _q: ''
}
class CategoryService {
  getAll (props) {
    const params = queryString.stringify(Object.assign({}, defaultParams, props))
    console.log(params);
    return apiService.get(`/categories?${params}`).then(response => {
      return {
        data: response.data,
        total: response.headers["x-total-count"]
      }
    })
  }

  get (id) {
    return apiService.get(`/categories/${id}`)
  }

  update (id, body) {
    return apiService.patch(`/categories/${id}`, JSON.stringify(body))
  }

  remove (id) {
    return apiService.delete(`/categories/${id}`)
  }
}

export default new CategoryService()