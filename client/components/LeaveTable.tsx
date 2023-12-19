import React, { use, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LeaveDTO, setLeave } from '../store/leave'
import axios from 'axios'
function LeaveTable() {
    const { leave } = useSelector((state) => state.leave)
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchLeave = async () => {
            const { data } = await axios.get('http://localhost:8000/leaves/me', { withCredentials: true })
            dispatch(setLeave(data))
        }
        fetchLeave()
    }, [])

    return (
        <table className="table bg-base-100 overflow-hidden shadow-md text-zinc-700 text-center">
            {/* head */}
            <thead>
                <tr className='text-lg text-zinc-700 bg-base-300'>
                    <th></th>
                    <th>ประเภท</th>
                    <th>จำนวนวันลา</th>
                    <th>วันที่เริ่มลา</th>
                    <th>วันสิ้นสุดลา</th>
                    <th>วันที่ทำรายการ</th>
                    <th>หมายเหตุ</th>
                </tr>
            </thead>
            <tbody className='text-md font-normal'>
                {/* row 1 */}
                {leave && leave?.leave_responses?.map((item: LeaveDTO, index: number) => {
                    let color = ''
                    if (item.type == 'ลาป่วย') {
                        color = "rounded-md text-white bg-red-500"
                    } else if (item.type == 'ลากิจ') {
                        color = "rounded-md text-white bg-yellow-500"
                    } else if (item.type == 'ลาพักร้อน') {
                        color = "rounded-md text-white bg-blue-500"
                    }

                    let date = new Date(item.created_at)
                    let newDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()

                    let startDate = new Date(item.time_start)
                    let newStartDate = startDate.getDate() + '/' + (startDate.getMonth() + 1) + '/' + startDate.getFullYear()

                    let endDate = new Date(item.time_end)
                    let newEndDate = endDate.getDate() + '/' + (endDate.getMonth() + 1) + '/' + endDate.getFullYear()

                    return (
                        <tr key={index} className=''>
                            <td>{index + 1}</td>
                            <td ><p className={color}>{item.type}</p></td>
                            <td>{item.leave_day}</td>
                            <td>{newStartDate}</td>
                            <td>{newEndDate}</td>
                            <td>{newDate}</td>
                            <td>{item.detail}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default LeaveTable