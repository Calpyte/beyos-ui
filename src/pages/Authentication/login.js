import './auth.css';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { padding } from '@mui/system';
import { FormGroup, FormControl, InputLabel, Input, Button } from '@mui/material';
import { useState } from 'react';
import { TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

export default function Login() {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const handleSubmit = (event) => {
        console.log(state);
        event.preventDefault();
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };

    return (
        <>
            <div
                style={{
                    width: '100%',
                    backgroundColor: 'grey',
                    height: window.screen.height,
                    position: 'absolute',
                    zIndex: -1,
                    overflow: 'hidden'
                }}
            >
                <Grid container spacing={0} style={{ zIndex: 1, marginTop: '5%' }}>
                    <Grid item md={3} xs={0}></Grid>
                    <Grid item md={6} xs={12}>
                        <Item style={{ padding: '20%' }}>
                            Login
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    style={{ marginBottom: '2%' }}
                                    fullWidth
                                    label="First Name"
                                    variant="outlined"
                                    name="firstName"
                                    value={state.firstName}
                                    onChange={handleChange}
                                />
                                <TextField
                                    style={{ marginBottom: '2%' }}
                                    fullWidth
                                    label="Last Name"
                                    variant="outlined"
                                    name="lastName"
                                    value={state.lastName}
                                    onChange={handleChange}
                                />
                                <TextField
                                    style={{ marginBottom: '2%' }}
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                    value={state.email}
                                    onChange={handleChange}
                                />
                                <TextField
                                    style={{ marginBottom: '2%' }}
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                    name="password"
                                    type="password"
                                    value={state.password}
                                    onChange={handleChange}
                                />
                                <Button type="submit">Submit</Button>
                            </form>
                        </Item>
                    </Grid>
                    <Grid item md={3} xs={0}></Grid>
                </Grid>
            </div>
        </>
    );
}
