import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { login } from '../store/user'
import { cookies } from 'next/headers'
import axios from 'axios'
function Nav() {
    const { user } = useSelector((state) => state.user)
    const dispatch = useDispatch()
    useEffect(() => {
        const { user } = JSON.parse(localStorage.getItem('user') || '{}')
        if (user) {
            dispatch(login(user))
        }
    }, [])

    const logout = async () => {
        const res = await axios.post("http://localhost:8000/auth/logout", {}, { withCredentials: true })
        localStorage.removeItem('user')
        dispatch(login(null))
        window.location.href = '/login'
    }
    return (
        <div className="navbar bg-base-100 shadow-md rounded-xl">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl ">ระบบการลา 📆</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className='font-bold text-lg text-blue-700'>
                                {user ? user.first_name : "Login Now"}
                            </summary>
                            {user &&
                                <ul className="p-2 bg-base-100">
                                    <li><button onClick={logout}>Logout</button></li>
                                </ul>
                            }
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav