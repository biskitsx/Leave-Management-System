import React from 'react'

function LeaveCount() {

    return (
        <div className='flex flex-row gap-10 justify-center text-center'>
            <div className='p-10 w-56 h-56 bg-red-500 grid items-center rounded-md'>
                <div className='flex flex-col gap-5 font-normal text-white text-xl'>
                    <h3>ลาป่วย</h3>
                    <h3>1</h3>
                    <h3>รายการ</h3>
                </div>
            </div>
            <div className='p-10 w-60 h-56 bg-yellow-500 grid items-center rounded-md'>
                <div className='flex flex-col gap-5 font-normal text-white text-xl'>
                    <h3>ลากิจ</h3>
                    <h3>1</h3>
                    <h3>รายการ</h3>
                </div>
            </div>
            <div className='p-10 w-56 h-56 bg-blue-500 grid items-center rounded-md'>
                <div className='flex flex-col gap-5 font-normal text-white text-xl'>
                    <h3>ลาพักร้อน</h3>
                    <h3>1</h3>
                    <h3>รายการ</h3>
                </div>
            </div>
        </div>
    )
}

export default LeaveCount