const url = "http://localhost:3000/pets";

export function getAll(category = "") {
  let petsUrl =
    category && category !== "all" ? url + `?category=${category}` : url;

  return fetch(petsUrl).then((res) => res.json());
}

export async function getOne(id) {
  
  let res = await fetch(url + `/${id}`);

  return await res.json();
}

export async function givePet(id, likes) {
  return await fetch(url + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      likes: likes,
    }),
  });
}
