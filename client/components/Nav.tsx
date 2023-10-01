import React from 'react'
import { useSelector } from 'react-redux'
function Nav() {
    const { user } = useSelector((state) => state.user)
    return (
        <div className="navbar bg-base-100 shadow-md rounded-xl">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl ">ระบบการลา 📆</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>
                                {user && user.first_name}
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav