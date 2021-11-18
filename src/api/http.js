import axios from "axios";

// axios.defaults.baseURL = "https://your-worker.emiliodeng98.workers.dev";
axios.defaults.baseURL = "http://127.0.0.1:8787";

// post
export function post(url, data, contentType) {
  return axios.post(url, data, {
    headers: {
      "Content-Type": contentType
        ? contentType
        : "application/json;charset=UTF-8",
    },
  });
}

export function postFormData(url, data, contentType) {
  return axios.post(url, data, {
    headers: {
      "Content-Type": contentType ? contentType : "multipart/form-data",
    },
    withCredentials: true,
  });
}

export function get(url, params) {
  return axios.get(
    url,
    {
      params: params,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    }
  );
}

export function del(url, params) {
  return axios.delete(url, {
    params: params,
  });
}
