'use client';

import { Paper, styled } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { CustomBox } from './style';

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
        <Grid container spacing={2} sx={{ width: '100%', margin: '0 auto' }}>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={4}>
            <Item>size=4</Item>
          </Grid>
          <Grid size={8}>
            <Item>size=8</Item>
          </Grid>
        </Grid>
      </CustomBox>
    </main>
  );
}
