import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export const getCategories = () => api.get('/categories')

export const getProducts = (params = {}) => api.get('/products', { params })
export const getProductById = (id) => api.get(`/products/${id}`)

