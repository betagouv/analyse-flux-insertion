export async function appFetch(url, token, method = "GET", body = null) {
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "access-token": token.tokenId,
      uid: token.uid,
      client: token.client,
    },
    body: body,
  })
  const result = response.json();

  return result;
};
