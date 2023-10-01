import Image from 'next/image'
import { Inter } from 'next/font/google'
import Nav from '../components/Nav'
import { useEffect } from 'react'
import LeaveCount from '../components/LeaveCount'
import LeaveTable from '../components/LeaveTable'
import AddLeaveBtn from '../components/AddLeaveBtn'


export default function Home() {
    useEffect(() => {
    }, [])
    return (
        <div className='p-2 flex flex-col gap-10 items-center'>
            <Nav />
            <div className='flex flex-col gap-10 w-8/12'>
                <h1 className='text-4xl font-bold text-center'>ยินดีต้อนรับ 👋🏻</h1>
                <LeaveCount />
                <AddLeaveBtn />
                <LeaveTable />
            </div>
        </div>
    )
}
