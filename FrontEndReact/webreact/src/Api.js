const BASE_URL = 'http://localhost:8080';

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

const api = {
  get: async (url) => {
    const response = await fetch(`${BASE_URL}${url}`);
    return handleResponse(response);
  },

  post: async (url, data) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  patch: async (url, data) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },

  delete: async (url) => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
    });
    return handleResponse(response);
  },
};

export default api;
