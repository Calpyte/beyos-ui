import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import CustomTextField from 'components/CustomTextField';
import { useState } from 'react';

export default function Dashboard() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleFirstNameChange = (value) => {
        setFirstName(value);
    };

    const handleLastNameChange = (value) => {
        setLastName(value);
    };

    const handleSubmit = (event) => {
        console.log(event.target.value);
        event.preventDefault();
        // handle form submission
    };

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                padding: '1%',
                backgroundColor: 'white',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;',
                borderRadius: '5px'
            }}
        >
            <Stack variant="row" spacing={3}>
                {/* <form onSubmit={handleSubmit}>
                    <CustomTextField
                        name="First Name"
                        variant="oulined"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        required
                    />
                    <CustomTextField
                        name="Last Name"
                        id="lastName"
                        variant="oulined"
                        value={lastName}
                        onChange={handleLastNameChange}
                        required
                        minLength={2}
                        maxLength={10}
                        pattern="[A-Za-z]+"
                    />
                    <button type="submit">Submit</button>
                </form> */}
                <Skeleton variant="rounded" style={{ width: '100%', height: '200px' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
        </Box>
    );
}
