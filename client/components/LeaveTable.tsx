import React from 'react'
import { useSelector } from 'react-redux'
import { LeaveDTO } from '../store/leave'
function LeaveTable() {
    const { leave } = useSelector((state) => state.leave)
    return (
        <table className="table bg-base-100 overflow-hidden shadow-md text-zinc-700">
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
            <tbody className='text-lg font-normal'>
                {/* row 1 */}
                {leave && leave.map((item: LeaveDTO, index: number) => {
                    return (
                        <tr key={index} className=''>
                            <td>{index + 1}</td>
                            <td>{item.type}</td>
                            <td>3</td>
                            <td>{item.time_start}</td>
                            <td>{item.time_end}</td>
                            <td>{item.created_at}</td>
                            <td>{item.detail}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default LeaveTable