import http from './HttpCommon'

class BoardDataService{
  //http://3.37.128.156:9999/hjs/rboard/list
  getAll(){
    return http.get('/rboard/list')
  }

  getPagingList(path = '/rboard/list2', search = '') {
    return http.get(path + search)
  }
  get(id){
    return http.get(`/rboard/${id}`)
  }
  remove(id) {
    console.log(id)
    return http.delete(`/rboard/${id}`)
  }

  write(data) {
    return http.post(`/rboard/`, data)
  }

  update(id, data) {
    return http.put(`/rboard/${id}`, data)
  }
}

export default new BoardDataService()