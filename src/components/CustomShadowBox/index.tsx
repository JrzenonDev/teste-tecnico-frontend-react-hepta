import { ReactNode } from 'react';
import { BoxCustomShadow } from './style';

interface CustomShadowBoxProps {
  children: ReactNode;
}

export function CustomShadowBox({ children }: CustomShadowBoxProps) {
  return <BoxCustomShadow>{children}</BoxCustomShadow>;
}
