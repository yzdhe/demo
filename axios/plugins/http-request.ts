/*
 * @Author: jack.lu
 * @Date: 2022-10-25 10:18:02
 * @LastEditTime: 2022-10-25 10:45:16
 * @LastEditors: jack.lu
 * @Description: just do it
 * @FilePath: /demo/axios/plugins/http-request.ts
 */

import axios, { AxiosResponse, AxiosInstance } from 'axios'
import requestInterceptors from './requestInterceptors'

let axiosInstance: AxiosInstance | null = null

function createHttpRequest(defaultValue: {
  baseUrl: string
  timeout: number
}): AxiosInstance {
  if (axiosInstance) return axiosInstance
  axios.defaults.timeout = defaultValue.timeout
  axios.defaults.baseURL = defaultValue.baseUrl
  axiosInstance = axios.create()
  return axiosInstance
}
