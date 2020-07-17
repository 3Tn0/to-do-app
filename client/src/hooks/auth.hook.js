import { useCallback, useState, useEffect } from 'react'

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)

    const login = useCallback((jwtToken, id) => {
        setToken(jwtToken)
        setUserId(id)

        localStorage.setItem(storageName, JSON.stringify({ jwtToken, id }))

    }, [])

    const logout = useCallback((jwtToken, id) => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
    }, [])

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem(storageName))
        if (userData && userData.jwtToken) {
            setToken(userData.jwtToken)
            setUserId(userData.id)
        }
    }, [])

    return { login, logout, token, userId }
}

