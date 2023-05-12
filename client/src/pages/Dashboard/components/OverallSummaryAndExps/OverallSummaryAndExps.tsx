import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { DashboardBox } from '@/styled-components/DashboardBox';
import { BoxHeader } from '../BoxHeader';

export type OverallSummaryAndExpsProps = {};

const OverallSummaryAndExps: React.FC<OverallSummaryAndExpsProps> = () => {
    const { palette } = useTheme();

    return (
        <DashboardBox gridArea="j">
            <BoxHeader title="Overall Summary and Explanation Data" />
            <Box
                height="15px"
                margin="1.25rem 1rem 0.4rem 1rem"
                bgcolor={palette.primary[800]}
                borderRadius="1rem"
            >
                <Box
                    height="15px"
                    bgcolor={palette.primary[600]}
                    borderRadius="1rem"
                    width="40%"
                ></Box>
            </Box>
            <Typography variant="h6" margin="0 1rem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae voluptate eos soluta ab, exercitationem voluptatum
                nemo quas vitae. Mollitia excepturi illum voluptates eos?
                Commodi repellat sed nihil, vitae dignissimos illo!
            </Typography>
        </DashboardBox>
    );
};

export default OverallSummaryAndExps;
