/* global fetch */
export const handler = async (event) => {
  let results = "";
  const queryParams = event.queryStringParameters;
  const apiurlTruffle = "https://trefle.io/api/v1/species";
  
  if (queryParams.plantID) {
    const res = await fetch(`${apiurlTruffle}/${queryParams.plantID}?token=${queryParams.token}`);
    results = await res.json();
  } else {
    const res = await fetch(`${apiurlTruffle}?token=${queryParams.token}&filter[flower_color]=${queryParams.clr}&page=${queryParams.page}`);
    results = await res.json();
  }


  const response = {
    statusCode: 200,
    body: JSON.stringify(results),
  };
  return response;
};