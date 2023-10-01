import React, { SyntheticEvent, useState } from 'react'
import Nav from '../components/Nav'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { login } from '../store/user'
import { setLeave } from '../store/leave'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const router = useRouter()

    const handleButton = async (e: SyntheticEvent) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8000/auth/login', { username, password }, { withCredentials: true })
            const data = res.data
            console.log(data)
            const { leave_response_with_count, ...user } = data
            console.log(leave_response_with_count)
            console.log(user)
            localStorage.setItem('user', JSON.stringify({ user }))
            dispatch(login(user))
            dispatch(setLeave(leave_response_with_count))
            router.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='p-2'>
            <Nav />
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-96 shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" placeholder="username" className="input input-bordered" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" onClick={handleButton}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login