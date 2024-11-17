import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const ServicesCom = () => {
    return(
        <div className='h-40 grid justify-center items-center'>
    <Stack direction="row" spacing={1}>
        <a href='/scholarship'>
            <Chip sx={{
    height: '3rem',
    width: '8rem',
  }} color="secondary" label="Scholarship" />
        </a>

        <a href='TravelInsurance'>
            <Chip sx={{
    height: '3rem',
    width: '8rem',
  }} label="Travel Insurance" variant="outlined" />
        </a>

        <a href='/AirTicketPg'>
            <Chip sx={{
    height: '3rem',
    width: '8rem',
  }} label="Air Ticket" />
        </a>
    </Stack>
    <Stack className='grid justify-center items-center' direction="row" spacing={1}>
      <Chip label="International Driving License" />
      <Chip color="secondary" label="Finance" />
    </Stack>
        </div>
    );
};

export default ServicesCom;