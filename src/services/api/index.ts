import { apiClient } from './client'
import { profileData, projectsData, experienceData, skillsData } from '../../data/portfolio'

export const apiService = {
  async getProfile() {
    // Simulate API call
    await apiClient.get('/profile')
    return profileData
  },

  async getProjects() {
    await apiClient.get('/projects')
    return projectsData
  },

  async getExperience() {
    await apiClient.get('/experience')
    return experienceData
  },

  async getSkills() {
    await apiClient.get('/skills')
    return skillsData
  },
}
