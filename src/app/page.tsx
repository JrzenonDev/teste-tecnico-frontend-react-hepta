'use client';

import { Box, Paper, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CustomBox } from './style';
import { CardCurrentTemperature } from '@/components/CardCurrentTemperature';
import { CardCityInformation } from '@/components/CardCityInformation';
import { CardTemperatureDaysOfWeek } from '@/components/CardTemperatureDaysOfWeek';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  boxShadow: theme.shadows[2],
}));

export default function Home() {
  return (
    <main>
      <CustomBox>
        <Grid
          container
          spacing={2}
          sx={{ width: '100%', margin: '0 auto', padding: '2rem', maxWidth: '100%' }}
        >
          <Grid
            size={12}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <CardCityInformation />
            <CardCurrentTemperature />
          </Grid>
          <Grid size={12}>
            <Box sx={{ display: 'flex' }}>
              <CardTemperatureDaysOfWeek />
              <CardTemperatureDaysOfWeek />
              <CardTemperatureDaysOfWeek />
              <CardTemperatureDaysOfWeek />
              <CardTemperatureDaysOfWeek />
              <CardTemperatureDaysOfWeek />
              <CardTemperatureDaysOfWeek />
            </Box>
          </Grid>
        </Grid>
      </CustomBox>
    </main>
  );
}
