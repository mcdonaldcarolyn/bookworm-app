const axios = require('axios')

const BASE_URL = "http://127.0.0.1:8000/book/"

async function getListFromAPI(endpoint) {
  return await axios.get(`${BASE_URL}${endpoint}`)
}

export async function lookupUnfinishedList() {
  let response = await getListFromAPI('unfinshed/')
}