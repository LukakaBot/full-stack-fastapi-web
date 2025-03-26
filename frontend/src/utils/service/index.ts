import { createAlova } from "alova";
import adapterFetch from "alova/fetch";
import interceptorManager from "./core/interceptorManager";


const service = createAlova({
  baseURL: '/api',
  requestAdapter: adapterFetch(),
  beforeRequest: interceptorManager.beforeRequest,
  responded: interceptorManager.responded
})

export default service;