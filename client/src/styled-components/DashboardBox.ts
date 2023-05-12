import { Box } from '@mui/material';
import { styled } from '@mui/system';

export const DashboardBox = styled(Box)(({ theme }) => ({
    background: theme.palette.background.light,
    borderRadius: '1rem',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}));
