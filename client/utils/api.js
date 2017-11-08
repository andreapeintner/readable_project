export const API = 'http://localhost:3001'

// Categories

const headers = { 'Authorization': 'andi' }

export const fetchCategories = () => {
  return fetch(`${API}/categories`, { headers })
    .then(res => res.json())
    .then(categories => categories)
}

// **** Posts
// get all

export const fetchPosts = () => {
  return fetch(`${API}/posts`, { headers })
    .then(res => res.join())
    .then(posts => posts)
}
