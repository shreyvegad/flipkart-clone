import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from 'react';   


const Component = styled(Menu)`
    margin-top: 5px;
`
const Logout = styled(Typography)`
    font-size: 16px;
    margin-left: 20px;
`

const Profile = ({ account, setAccount }) => {
    
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logoutUser = () => {
        setAccount('');
    }
    return (
        <>
            <Box onClick={handleClick}>

                <Typography style={{marginTop: 5, cursor: 'pointer'}}>{account}</Typography>

            </Box>

            <Component
                anchorEl={open} 
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => {handleClose(); logoutUser(); }}>
                    <PowerSettingsNewIcon color='primary' fontSize='small' />
                    <Logout>Logout</Logout>
                </MenuItem>
                
            </Component>
        </>
    )
}

export default Profile;