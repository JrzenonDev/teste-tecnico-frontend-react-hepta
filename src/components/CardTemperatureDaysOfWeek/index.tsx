import React, { JSX } from 'react';
import { Typography } from '@mui/material';
import { CardTemperature } from './style';
import { Sun, CloudRain, Cloud, CloudLightning, CloudSun } from 'lucide-react';

interface CardTemperatureDaysOfWeekProps {
  date: string;
  weatherCode: number;
  maxTemp: number;
  minTemp: number;
}

const weatherIcons: Record<number, { icon: JSX.Element; label: string }> = {
  0: { icon: <Sun />, label: 'Céu limpo' },
  1: { icon: <CloudSun />, label: 'Poucas nuvens' },
  2: { icon: <CloudSun />, label: 'Parcialmente nublado' },
  3: { icon: <Cloud />, label: 'Nublado' },
  45: { icon: <Cloud />, label: 'Nevoeiro' },
  48: { icon: <Cloud />, label: 'Nevoeiro' },
  51: { icon: <CloudRain />, label: 'Chuva leve' },
  80: { icon: <CloudRain />, label: 'Pancadas de chuva' },
  95: { icon: <CloudLightning />, label: 'Tempestade' },
  96: { icon: <CloudLightning />, label: 'Tempestade forte' },
};

const getWeekday = (dateString: string): string => {
  const daysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  const date = new Date(dateString);
  return daysOfWeek[date.getDay()];
};

export function CardTemperatureDaysOfWeek({
  date,
  weatherCode,
  maxTemp,
  minTemp,
}: CardTemperatureDaysOfWeekProps) {
  const weather = weatherIcons[weatherCode] || { icon: <Cloud />, label: 'Desconhecido' };

  return (
    <CardTemperature>
      <Typography>{getWeekday(date)}</Typography>
      <Typography>{weather.icon}</Typography>
      <Typography>Max. {maxTemp.toFixed(1)}°C</Typography>
      <Typography>Min. {minTemp.toFixed(1)}°C</Typography>
    </CardTemperature>
  );
}
