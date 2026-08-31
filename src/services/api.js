import axios from 'axios'

// Set USE_API to true if you want to switch to a remote API domain later.
// This can be set via Vite environment variable VITE_USE_API=true.
const USE_API = import.meta.env.VITE_USE_API === 'true' || false

// Base URL for the remote API or fallback to local data folder
const BASE_URL = USE_API
  ? (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173/api')
  : '/data'

const api = axios.create({
  baseURL: BASE_URL,
})

const apiService = {
  async getProfile() {
    const res = await api.get(USE_API ? 'profile' : 'profile.json')
    return res.data
  },
  async getProjects() {
    const res = await api.get(USE_API ? 'projects' : 'projects.json')
    return res.data
  },
  async getExperience() {
    const res = await api.get(USE_API ? 'experience' : 'experience.json')
    return res.data
  },
  async getSkills() {
    const res = await api.get(USE_API ? 'skills' : 'skills.json')
    return res.data
  }
}

export default apiService

