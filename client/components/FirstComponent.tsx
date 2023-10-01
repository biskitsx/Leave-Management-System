import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function FirstComponent({ setStartDate, setEndDate }) {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}
        >
            <div className='flex flex-row gap-5 w-full'>
                <div className='flex flex-col gap-2 w-full'>
                    <h1>วันที่เริ่มลา</h1>
                    <DatePicker
                        onChange={(e) => {
                            setStartDate(e.$d)
                        }}
                    />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <h1>วันที่สิ้นสุดลา</h1>
                    <DatePicker
                        onChange={(e) => {
                            console.log("first")
                            console.log(e.$d)
                            setEndDate(e.$d)
                        }}
                    />
                </div>
            </div>
        </LocalizationProvider>
    );
}