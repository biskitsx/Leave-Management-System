import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function TypeSelector({ type, setType }) {


    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">ประเภทการลา</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>ลากิจ</MenuItem>
                    <MenuItem value={20}>ลาป่วย</MenuItem>
                    <MenuItem value={30}>ลาพักร้อน</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}