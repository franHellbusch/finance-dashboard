import React, { useState } from 'react';
import { useTheme, Box, Typography, Button } from '@mui/material';
import { useGetKpiQuery } from '@/state/api';
import { DashboardBox } from '@/styled-components/DashboardBox';
import FlexBetween from '@/styled-components/FlexBetween';

export interface PredictionsProps {}

const Predictions: React.FC<PredictionsProps> = () => {
    const { palette } = useTheme();
    const [isPredictions, setIsPredictions] = useState(false);
    const { data: KPIs } = useGetKpiQuery();

    return (
        <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
            <FlexBetween m="1rem 2.5rem" gap="1rem">
                <Box>
                    <Typography variant="h3">
                        Revenue and Predictions
                    </Typography>
                    <Typography variant="h6">
                        Charted revenue and predicted revenue based on a simple
                        linear regression model
                    </Typography>
                </Box>
                <Button
                    onClick={() => setIsPredictions(!isPredictions)}
                    sx={{
                        color: palette.grey[900],
                        bgcolor: palette.grey[700],
                        boxShadow: '0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)',
                    }}
                >
                    Show Predicted Revenue for next year
                </Button>
            </FlexBetween>
        </DashboardBox>
    );
};

export default Predictions;
