import { defineStore } from 'pinia'
import api from '../services/api'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    projects: [],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchProjects() {
      this.isLoading = true
      this.error = null
      try {
        const response = await api.get('/projects')
        this.projects = response.data
      } catch (error) {
        this.error = 'Failed to fetch projects'
      } finally {
        this.isLoading = false
      }
    },
  },
})