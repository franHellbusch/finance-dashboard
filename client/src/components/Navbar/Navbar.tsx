import PixIcon from '@mui/icons-material/Pix';
import FlexBetween from '@/styled-components/FlexBetween';
import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const { palette } = useTheme();
    const [selected, setSelected] = useState('dashboard');

    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0" color={palette.grey[300]}>
            <FlexBetween gap="0.75rem">
                <PixIcon sx={{ fontSize: '28px' }} />
                <Typography variant="h4" fontSize="16px">
                    Finance
                </Typography>
            </FlexBetween>
            <FlexBetween gap="2rem">
                <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
                    <Link
                        to="/"
                        onClick={() => setSelected('dashboard')}
                        style={{
                            color:
                                selected === 'dashboard'
                                    ? 'inherit'
                                    : palette.grey[700],
                            textDecoration: 'inherit',
                        }}
                    >
                        Dashboard
                    </Link>
                </Box>
                <Box sx={{ '&:hover': { color: palette.primary[100] } }}>
                    <Link
                        to="/predictions"
                        onClick={() => setSelected('predictions')}
                        style={{
                            color:
                                selected === 'predictions'
                                    ? 'inherit'
                                    : palette.grey[700],
                            textDecoration: 'inherit',
                        }}
                    >
                        Predictions
                    </Link>
                </Box>
            </FlexBetween>
        </FlexBetween>
    );
};

export default Navbar;
