import axiosClient from "./axiosClient"

class ApiService {
  formatErrors(error) {
    // format error
    return error.error
  }

  get(path, params) {
    return axiosClient.get(path, { params }).catch(this.formatErrors);
  }

  put(path, body) {
    return axiosClient.put(path,JSON.stringify(body)).catch(this.formatErrors)
  }

  patch(path, body) {
    return axiosClient.patch(path,JSON.stringify(body)).catch(this.formatErrors)
  }

  post(path, body) {
    return axiosClient.post(path,JSON.stringify(body)).catch(this.formatErrors);
  }

  delete(path) {
    return axiosClient.delete(path).catch(this.formatErrors);
  }
}

export default new ApiService()