import { request } from './generic.sevice'

const postPaymentIntent = data => request({ url: 'payment/', method: 'post', data })

export { postPaymentIntent }