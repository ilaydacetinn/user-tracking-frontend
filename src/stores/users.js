import { defineStore } from 'pinia'
import * as api from '../services/api' // API servisimizi import ediyoruz

export const useUserStore = defineStore('users', {
  state: () => ({
    users: [],
    selectedUser: null,
    posts: [],
    albums: [],
    todos: [],
    loading: false,
    error: null,
  }),
  actions: {
    async fetchUsers() {
      this.loading = true
      try {
        const response = await api.fetchUsers()
        this.users = response.data.results // DRF'den gelen 'results' alanını alıyoruz
        this.error = null
      } catch (err) {
        this.error = 'Kullanıcılar yüklenirken bir hata oluştu.'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    async fetchUserDetail(id) {
      this.loading = true
      try {
        const response = await api.fetchUserDetail(id)
        this.selectedUser = response.data
        this.error = null
      } catch (err) {
        this.error = `Kullanıcı detayı (ID: ${id}) yüklenirken bir hata oluştu.`
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    async fetchUserPosts(id) {
      this.loading = true
      try {
        const response = await api.fetchUserPosts(id)
        this.posts = response.data.results
        this.error = null
      } catch (err) {
        this.error = 'Paylaşımlar yüklenirken bir hata oluştu.'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    async fetchUserAlbums(id) {
      this.loading = true
      try {
        const response = await api.fetchUserAlbums(id)
        this.albums = response.data.results
        this.error = null
      } catch (err) {
        this.error = 'Albümler yüklenirken bir hata oluştu.'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
    async fetchUserTodos(id) {
      this.loading = true
      try {
        const response = await api.fetchUserTodos(id)
        this.todos = response.data.results
        this.error = null
      } catch (err) {
        this.error = 'Görevler yüklenirken bir hata oluştu.'
        console.error(err)
      } finally {
        this.loading = false
      }
    },
  },
  getters: {
    // Burada ihtiyacınız olursa hesaplanmış durumlar için getter'lar ekleyebilirsiniz
  }
})