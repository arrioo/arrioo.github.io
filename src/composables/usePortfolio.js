import { ref } from 'vue'
import apiService from '../services/api'

const profile = ref(null)
const projects = ref([])
const experience = ref([])
const skills = ref([])
const isLoading = ref(true)
const error = ref(null)

export function usePortfolio() {
  const fetchAllData = async () => {
    isLoading.value = true
    error.value = null

    try {
      // console.log('Starting fetchAllData...')

      const [profileRes, projectsRes, experienceRes, skillsRes] = await Promise.all([
        apiService.getProfile(),
        apiService.getProjects(),
        apiService.getExperience(),
        apiService.getSkills(),
      ])

      // console.log('ALL API REQUESTS SUCCESSFUL')
      // console.log('profileRes:', profileRes)
      // console.log('projectsRes:', projectsRes)
      // console.log('experienceRes:', experienceRes)
      // console.log('skillsRes:', skillsRes)

      profile.value = profileRes.data
      projects.value = projectsRes.data
      experience.value = experienceRes.data
      skills.value = skillsRes.data

      // console.log('FINAL profile:', profile.value)
    } catch (e) {
      // console.error('FETCH FAILED:', e)
      // console.error('Error response:', e.response)
      // console.error('Error status:', e.response?.status)
      // console.error('Error URL:', e.config?.url)

      error.value = e
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
