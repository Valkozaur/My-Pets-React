const url = "http://localhost:3000/pets";

export function getAll(category = '') {
    let petsUrl = category && category !== 'all' ? url + `?category=${category}` : url;

  return fetch(petsUrl).then((res) => res.json());
}