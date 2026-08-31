import { ref } from 'vue'
import apiService from '../services/api.js'

export function usePortfolio() {
  const profile = ref(null)
  const projects = ref([])
  const experience = ref([])
  const skills = ref([])
  const isLoading = ref(true)
  const error = ref(null)

  const fetchAllData = async () => {
    isLoading.value = true
    error.value = null
    try {
      const [profileRes, projectsRes, experienceRes, skillsRes] = await Promise.all([
        apiService.getProfile(),
        apiService.getProjects(),
        apiService.getExperience(),
        apiService.getSkills(),
      ])

      profile.value = profileRes
      projects.value = projectsRes
      experience.value = experienceRes
      skills.value = skillsRes
    } catch (e) {
      error.value = e
      console.error('Failed to fetch portfolio data:', e)
    } finally {
      isLoading.value = false
    }
  }

  return {
    profile,
    projects,
    experience,
    skills,
    isLoading,
    error,
    fetchAllData,
  }
}
