import Axios from 'axios'

const BASE_URL = 'http://localhost:1234'

class PhoneBookService {
  getPhoneBook () {
    return Axios.get(BASE_URL + '/getAll').then(resp => {
      return resp.data
    }).catch(err => {
      console.error(err);
      throw new Error(err);
    });
  }

  deletePhone (id) {
    return Axios.delete(BASE_URL + '/' + id + '/delete').then(resp => {
      return resp.data
    }).catch(err => {
      console.error(err);
      throw new Error(err);
    });
  }

  getUser (id) {
    return Axios.get(BASE_URL + '/getUser/' + id).then(resp => {
      return resp.data
    }).catch(err => {
      console.error(err);
      throw new Error(err);
    });
  }

  updateUser (id, data) {
    return Axios.put(BASE_URL + '/' + id + '/update', data).then(resp => {
      return resp.data
    }).catch(err => {
      console.error(err);
      throw new Error(err);
    });
  }

  addUser (data) {
    return Axios.post(BASE_URL + '/add', data).then(resp => {
      return resp.data
    }).catch(err => {
      console.error(err);
      throw new Error(err);
    });
  }
}

export default new PhoneBookService()
