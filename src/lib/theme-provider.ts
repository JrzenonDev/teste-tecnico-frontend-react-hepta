"use client";

import { createTheme } from "@mui/material";
import { ptBR as corePtBR } from "@mui/material/locale";
import { ptBR } from "@mui/x-date-pickers/locales";
import { ptBR as DataGridPtBr } from "@mui/x-data-grid/locales";

export const theme = createTheme(
  {
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
          },
        },
      },
    },
    palette: {
      primary: {
        main: "#0173af",
      },
      secondary: {
        main: "#ddd",
      },
    },
  },
  corePtBR,
  ptBR,
  DataGridPtBr
);
