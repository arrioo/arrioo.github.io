// Base API client
// In a real application, this would make HTTP requests using fetch or axios
// For now, it simulates API calls using the local data.

const MOCK_DELAY = 300 // Simulate network delay

export const apiClient = {
  async get(endpoint) {
    // In future: return axios.get(`${import.meta.env.VITE_API_URL}${endpoint}`)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: null }) // overridden in services
      }, MOCK_DELAY)
    })
  }
}
