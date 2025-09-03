import { defineStore } from 'pinia'
import * as api from '../services/api'

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
            this.error = null
            try {
                const cachedUsers = localStorage.getItem('users');
                if (cachedUsers) {
                    this.users = JSON.parse(cachedUsers);
                    this.loading = false;
                    return;
                }

                const response = await api.getUsers();
                this.users = response;
                localStorage.setItem('users', JSON.stringify(response));
            } catch (err) {
                this.error = 'Kullanıcılar yüklenirken bir hata oluştu.'
                console.error(err)
            } finally {
                this.loading = false
            }
        },
        async fetchUserDetail(id) {
            this.loading = true
            this.error = null
            try {
                const cachedUser = localStorage.getItem(`user-${id}`);
                const cachedPosts = localStorage.getItem(`posts-${id}`);
                const cachedAlbums = localStorage.getItem(`albums-${id}`);
                const cachedTodos = localStorage.getItem(`todos-${id}`);

                if (cachedUser && cachedPosts && cachedAlbums && cachedTodos) {
                    this.selectedUser = JSON.parse(cachedUser);
                    this.posts = JSON.parse(cachedPosts);
                    this.albums = JSON.parse(cachedAlbums);
                    this.todos = JSON.parse(cachedTodos);
                    this.loading = false;
                    return;
                }

                const [userResponse, postsResponse, albumsResponse, todosResponse] = await Promise.all([
                    api.getUser(id),
                    api.getUserPosts(id),
                    api.getUserAlbums(id),
                    api.getUserTodos(id)
                ]);

                this.selectedUser = userResponse;
                this.posts = postsResponse;
                this.albums = albumsResponse;
                this.todos = todosResponse;

                localStorage.setItem(`user-${id}`, JSON.stringify(userResponse));
                localStorage.setItem(`posts-${id}`, JSON.stringify(postsResponse));
                localStorage.setItem(`albums-${id}`, JSON.stringify(albumsResponse));
                localStorage.setItem(`todos-${id}`, JSON.stringify(todosResponse));

            } catch (err) {
                this.error = `Kullanıcı detayı (ID: ${id}) yüklenirken bir hata oluştu.`
                console.error(err)
            } finally {
                this.loading = false
            }
        },
    },
    getters: {}
});