import apiService from "./apiService";

class CategoryService {
  getAll () {
    return apiService.get('/categories')
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