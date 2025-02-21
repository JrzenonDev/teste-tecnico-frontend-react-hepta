import { Box, Typography } from '@mui/material';
import { MapPin } from 'lucide-react';
import { CustomShadowBox } from '../CustomShadowBox';

export function CardCityInformation() {
  return (
    <CustomShadowBox>
      <Box sx={{ display: 'flex' }}>
        <MapPin />
        <Typography>City</Typography>
      </Box>
      <Typography variant="h6">MAY 5</Typography>
      <Typography variant="h5">12:37</Typography>
      <Typography>CLOUD</Typography>
    </CustomShadowBox>
  );
}
