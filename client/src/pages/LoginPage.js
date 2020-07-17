import React, {useState, useEffect} from 'react'
import { useHttp } from '../hooks/http.hook'
import { useMessage } from '../hooks/message.hook'
import { connect } from 'react-redux'

function LoginPage({userData}) {

    const { loading, request, error, clearError } = useHttp()
    const message = useMessage()
    const login = userData.login

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

    const loginHandler = async () => {
        try {
            const data = await request('/api/v1/auth/login', 'POST', { ...form })
            message(JSON.stringify(data))
            login(data.token, data.userId)
        } catch (e) {

        }
    }

    return (
        <div>
            <h1>LoginPage</h1>
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
                        onClick={loginHandler}
                        disabled={loading}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

export default connect(mapStateToProps, null)(LoginPage)