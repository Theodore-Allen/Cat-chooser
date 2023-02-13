async function catPic() {
  const endpoint = 'https://api.api-ninjas.com/v1/cats?shedding=1';
  const option = {
    method: 'GET',
    headers: {
      'X-Api-Key': 'JriCuFIC8v9qOkSUY9Nz2Q==nNLBggXZqWobkXxT',
    },
  };

  const server = await fetch(endpoint, option);
  const response = await server.json();
  console.log(response);
}
catPic();
