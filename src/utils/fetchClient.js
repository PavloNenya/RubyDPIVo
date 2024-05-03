const BASE_URL = "http://localhost:9091/api";

function wait(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function request(url, method = "GET", data = null) {
  const options = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      "Content-Type": "application/json; charset=UTF-8",
    };
  }

  return wait(300)
    .then(() => fetch(BASE_URL + url, options))
    .then((response) => response.json());
}

export const client = {
  get: (url) => request(url),
  post: (url, data) => request(url, "POST", data),
  patch: (url, data) => request(url, "PATCH", data),
  delete: (url) => request(url, "DELETE"),
};
