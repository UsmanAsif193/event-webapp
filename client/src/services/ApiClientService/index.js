const ApiUrl = 'http://localhost:3001/';
const ApiClient = {};

ApiClient.getEvents = function () {
  return fetchRequest('events', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

ApiClient.postEvent = function (info) {
  return fetchRequest('events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  });
};

ApiClient.deleteEvent = function (id) {
  const message = { id: id };
  return fetchRequest('events', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
};

function fetchRequest(path, options) {
  return fetch(ApiUrl + path, options)
    .then((res) => (res.status < 400 ? res : null))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .catch((err) => {
      console.error(
        `Error: ${err}\nIn fetch request from ${path}\nAt ${ApiUrl}`,
      );
    });
}

export default ApiClient;
