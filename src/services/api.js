import axios from 'axios'

// export default axios.create({
//   baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
// })

// for temp using json file

const apiService = {
  async getProfile() {
    const res = await axios.get('src/assets/data/profile.json')
    return res.data.profile
  },
  async getProjects() {
    const res = await axios.get('src/assets/data/projects.json')
    return res.data.projects
  },
  async getExperience() {
    const res = await axios.get('src/assets/data/experience.json')
    return res.data.experience
  },
  async getSkills() {
    const res = await axios.get('src/assets/data/skills.json')
    return res.data.skills
  }
}

export default apiService
