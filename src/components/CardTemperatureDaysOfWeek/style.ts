import { Box, styled } from '@mui/material';

export const CardTemperature = styled(Box)`
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px 24px;
  background-color: rgba(15, 40, 100, 0.4);
  box-shadow: 0px 8px 16px rgba(10, 30, 80, 0.4);

  margin-right: 10px;

  color: #fff;

  p {
    font-weight: 300;
  }

  h5 {
    font-size: 2rem;
    font-weight: 300;
  }

  h6 {
    font-size: 3.25rem;
    font-weight: 300;
  }
`;
