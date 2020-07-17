import React, { useState, useEffect } from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'

export default function RegisterPage() {

    const { loading, request, error, clearError } = useHttp()
    const message = useMessage()

    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const formChangeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/v1/auth/register', 'POST', { ...form })
            message(data.message)
        } catch (e) {

        }
    }

    return (
        <div>
            <h1>RegisterPage</h1>
            <div>
                <div>
                    <input
                        placeholder="email"
                        type="text"
                        name="email"
                        onChange={formChangeHandler}
                        disabled={loading}
                    />
                </div>
                <div>
                    <input
                        placeholder="password"
                        type="password"
                        name="password"
                        onChange={formChangeHandler}
                        disabled={loading}
                    />
                </div>
                <div>
                    <button
                        onClick={registerHandler}
                        disabled={loading}
                    >
                        Register
                    </button>
                </div>
            </div>
        </div>
    )
}
