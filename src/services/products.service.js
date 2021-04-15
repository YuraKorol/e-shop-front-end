import { request } from './generic.sevice'

const getAllProducts = () => request({ url: 'products/', method: 'get' })

const getOneProduct = id => request({ url: `products/${id}`, method: 'get' })

const updateProduct = id => request({ url: `products/${id}`, method: 'put' })

const deleteProduct = id => request({ url: `products/${id}`, method: 'delete' })

export {
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct
}
