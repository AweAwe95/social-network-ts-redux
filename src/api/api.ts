import axios from "axios";
import {UserType} from "../redux/users-reducer";

type UsersResponseType = {
    items: UserType[]
    totalCount: number
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "18cf4179-dc7e-4539-86b2-8fc45bfe0004"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId: number) {
        return instance.delete<any>(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post<any>(`follow/${userId}`, {})
            .then(response => {
                return response.data
            })
    }
}

export const authAPI = {
    authMe(){
        return instance.get<any>('auth/me')
            .then(response => {
                return response.data
            })
    },
}

export const profileAPI = {
    getProfile(userId: number){
        return instance.get<any>(`profile/${userId}`)
    },
    getStatus(userId: number){
        return instance.get<any>(`profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put<any>('profile/status', {status})
    }
}