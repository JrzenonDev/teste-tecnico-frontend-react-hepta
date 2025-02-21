import { Typography } from '@mui/material';
import { CustomShadowBox } from '../CustomShadowBox';

export function CardCurrentTemperature() {
  return (
    <CustomShadowBox>
      <Typography>PRESSURE: 1021hPA</Typography>
      <Typography>SUNRISE: 12:37</Typography>
      <Typography>SUNSET: 12:37</Typography>
      <Typography variant="h5">20 C</Typography>
    </CustomShadowBox>
  );
}
