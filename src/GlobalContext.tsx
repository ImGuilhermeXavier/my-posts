import React, { useEffect } from 'react'
import api from './api'

interface UsersInterface extends Array<UsersInterface> {
    id: number
    name: string
    username: string
    email: string
    website: string
}

interface PropsGlobalContext {
    users: UsersInterface | []
}

export const GlobalContext = React.createContext<PropsGlobalContext>({
    users: [],
})

interface PropsGlobalStorage {
    children: React.ReactNode
}

export const GlobalStorage = ({ children }: PropsGlobalStorage) => {
    const [users, setUsers] = React.useState<UsersInterface | []>([])

    useEffect(() => {
        async function getAllUsers() {
            const { data } = await api.get('users')
            setUsers(data)
        }
        getAllUsers()
    }, [])

    return (
        <GlobalContext.Provider value={{ users }}>
            {children}
        </GlobalContext.Provider>
    )
}
