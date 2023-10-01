import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import FirstComponent from './FirstComponent';
import TypeSelector from './TypeSelector';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 14,
    borderRadius: '10px',
    p: 4,
};


export default function AddLeaveBtn() {
    const [open, setOpen] = React.useState(false);
    const [startDate, setStartDate] = React.useState<Date | null>(null);
    const [endDate, setEndDate] = React.useState<Date | null>(null);
    const [type, setType] = React.useState('');

    console.log("startdate : " + startDate)
    console.log("enddate : " + endDate)
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen} className='btn-primary'>เพิ่มข้อมูลการลา</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={{ ...style, width: 600 }}>
                    <div className='flex flex-col gap-5'>
                        <h2 id="parent-modal-title" className='font-medium text-xl'>เพิ่มข้อมูลการลา</h2>
                        <div className='flex flex-col gap-5'>
                            <TypeSelector type={type} setType={setType} />
                            <FirstComponent setEndDate={setEndDate} setStartDate={setStartDate} />

                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}