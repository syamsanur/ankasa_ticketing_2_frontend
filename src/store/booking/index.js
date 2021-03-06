import axios from 'axios'
const { url } = require('../../helper/env')

const state = () => {
  return {
    booking: [],
    detail: []
  }
}

const mutations = {
  SET_BOOKING (state, payload) {
    state.booking = payload
  },
  SET_DETAIL (state, payload) {
    state.detail = payload
  }
}

const getters = {
  getallBooking (state) {
    return state.booking
  },
  bookingDetail (state) {
    return state.detail
  }
}

const actions = {
  getDataBooking (context, payload) {
    // console.log(`test ${payload}`)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/booking/userbooking/${payload}`)
        .then((response) => {
          context.commit('SET_BOOKING', response.data.data)
          // console.log(response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  getDetail (context, payload) {
    // console.log(`test ${payload}`)
    return new Promise((resolve, reject) => {
      axios.get(`${url}/booking/detail/${payload}`)
        .then((response) => {
          context.commit('SET_DETAIL', response.data.data[0])
          // console.log(response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  postBooking (context, payload) {
    console.log(payload)
    return new Promise((resolve, reject) => {
      axios.post(`${url}/booking/add`, payload)
        .then((response) => {
          console.log(response.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    })
  },
  deleteBooking (context, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`${url}/booking/delete/${payload}`)
        .then((response) => {
          console.log(response.data.data)
          resolve(response)
        })
        .catch(() => {
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
