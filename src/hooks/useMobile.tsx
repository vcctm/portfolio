import { useMediaQuery, useTheme } from "@mui/material";

export const useMobile = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return matches
}

export const useTablet = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return matches
}


