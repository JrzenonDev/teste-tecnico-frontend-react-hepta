import React from 'react';
import { Typography } from '@mui/material';
import { CardTemperature } from './style';
import { Sun } from 'lucide-react';

export function CardTemperatureDaysOfWeek() {
  return (
    <CardTemperature>
      <Typography>SUN</Typography>
      <Typography>
        <Sun />
      </Typography>
      <Typography>20C</Typography>
      <Typography>10C</Typography>
    </CardTemperature>
  );
}
