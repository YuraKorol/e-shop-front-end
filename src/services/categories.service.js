import { request } from './generic.sevice'

const getAllCategories = () => request({ url: 'categories/', method: 'get' })

const getOneCategory = id => request({ url: `categories/${id}`, method: 'get' })

const updateCategory = id => request({ url: `categories/${id}`, method: 'put' })

const deleteCategory = id => request({ url: `categories/${id}`, method: 'delete' })

export {
  getAllCategories,
  getOneCategory,
  updateCategory,
  deleteCategory
}