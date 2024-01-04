import React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface FirstComponentDTO {
    setStartDate: React.Dispatch<React.SetStateAction<Date | null>>
    setEndDate: React.Dispatch<React.SetStateAction<Date | null>>
    startDate: Date | null
}
export default function FirstComponent({ setStartDate, setEndDate, startDate, }: FirstComponentDTO) {
    const today = new Date()
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}
        >
            <div className='flex flex-row gap-5 w-full'>
                <div className='flex flex-col gap-2 w-full'>
                    <h1>วันที่เริ่มลา</h1>
                    <DatePicker
                        onChange={(e:any) => {
                            setStartDate(e.$d)
                        }}
                        disablePast

                    />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <h1>วันที่สิ้นสุดลา</h1>
                    <DatePicker
                        onChange={(e:any) => {
                            setEndDate(e.$d)
                        }}
                        disablePast
                    />
                </div>
            </div>
        </LocalizationProvider>
    );
}