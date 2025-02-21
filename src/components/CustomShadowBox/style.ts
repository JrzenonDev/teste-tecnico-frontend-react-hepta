import { Box, styled } from '@mui/material';

export const BoxCustomShadow = styled(Box)`
  min-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
  padding: 16px 24px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.4);
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
