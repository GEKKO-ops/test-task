const baseUrl = 'https://frontend-test-assignment-api.abz.agency';
const path = {
  api: '/api/v1',
};

const getToken = async () => {
  const response = await fetch(`${baseUrl}${path.api}/token`);
  const data = await response.json();
  return data.token;
};

export const fetchData = async (queryParam) => {
  let url;
  if (queryParam) {
    url = `${queryParam}`;
  } else {
    url = `${baseUrl}${path.api}/users?page=1&count=6`;
  }

  const response = await fetch(url);
  return await response.json();
};

export const createUser = async (body) => {
  const token = await getToken();
  const response = await fetch(`${baseUrl}${path.api}/users`, {
    method: 'POST',
    headers: {
      Token: token,
    },
    body: body,
  });
  const user = await response.json();
  return user;
};
