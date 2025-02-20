import { Box, Typography } from '@mui/material';
import { MapPin } from 'lucide-react';

export function CardCityInformation() {
  return (
    <Box>
      <MapPin /> City
      <Typography>MAY 5</Typography>
      <Typography>12:37</Typography>
      <Typography>CLOUD</Typography>
    </Box>
  );
}
