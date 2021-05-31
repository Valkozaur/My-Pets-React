const url = "http://localhost:3000/pets";

export function getAll(category = "") {
  let petsUrl =
    category && category !== "all" ? url + `?category=${category}` : url;

  return fetch(petsUrl).then((res) => res.json());
}

export function getOne(id) {
  return fetch(url + `/${id}`).then((res) => res.json());
}

export function givePet(id, likes) {
  fetch(url + `/${id}`, {
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
