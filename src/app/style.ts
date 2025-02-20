import { Box, styled } from '@mui/material';
import sunClouds from '@/assets/images/sun-clouds.png';

export const CustomBox = styled(Box)`
  background-image: url(${sunClouds.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  max-height: 100vh;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;
