import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../AppBar';
import Toolbar from '../Toolbar';
import Auth from '../../utils/auth';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

function NavBar() {
    const loggedIn = Auth.loggedIn();
    return (
        <div>
            <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flex: 0, display: 'flex', justifyContent: 'flex-end' }} />
                    <Link
                        variant="h6"
                        underline='none'
                        href="/"
                        sx={{ rightLink, color: 'inherit' }}
                    >
                        {'Home'}
                    </Link>
                    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        <Link
                            color="#f3a847"
                            variant="h6"
                            underline="none"
                            href="/events/"
                            sx={{ rightLink }}
                        >
                            {'Events'}
                        </Link>
                        <Link
                            color="#f3a847"
                            variant="h6"
                            underline="none"
                            href="/login/"
                            sx={{ rightLink }}
                        >
                            {'Sign In'}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            href="/membership/"
                            sx={{ ...rightLink, color: 'inherit' }}
                        >
                            {'Become A Member'}
                        </Link>
                    </Box>
            </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}

export default NavBar;
