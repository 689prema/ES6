class EasyHTTP {
  //Make an HTTP GET Request
  async get(url) {
    // return new Promise((resolve, reject) => {
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    // });
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  //Make an HTTP POST Request
  async post(url, data) {
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    //   })
    //     .then(res => res.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    // });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //Make an HTTP PUT Request
  async put(url, data) {
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "PUT",
    //     headers: {
    //       "Content-type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    //   })
    //     .then(res => res.json())
    //     .then(data => resolve(data))
    //     .catch(err => reject(err));
    // });

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData;
  }

  //Make an HTTP PUT Request
  async delete(url) {
    // return new Promise((resolve, reject) => {
    //   fetch(url, {
    //     method: "DELETE",
    //     headers: {
    //       "Content-type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    //   })
    //     .then(res => res.json())
    //     .then(() => resolve("Resource Deleted"))
    //     .catch(err => reject(err));
    //});
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });
    const resData = await "Resource Deleted";
    return resData;
  }
}

export const http = new EasyHTTP();
