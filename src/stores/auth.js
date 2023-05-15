import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
    id: 'auth',

    state: () => ({
        user: JSON.parse(localStorage.getItem('user'))
    }),

    actions: {
        login(auth) {
            localStorage.setItem('user', JSON.stringify({
                name: auth.displayName,
                email: auth.email
            }))
        },
        logout() {
            localStorage.removeItem('user')
        }
    },
})
