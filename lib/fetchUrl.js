export async function fetchUrl(url, token, method = "GET", body = null) {
  const result = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "access-token": token.tokenId,
      uid: token.uid,
      client: token.client,
    },
    body: body,
  })
    .then((response) => response.json());

  return result;
};
