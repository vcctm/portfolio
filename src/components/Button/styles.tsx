import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Button)(({theme}) => ({
  color: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,
  fontSize: '14px',
  padding: '4px 77.5px',
  ':hover': {
    backgroundColor: theme.palette.grey[800],
  }
}));
