import { Box, styled } from "@mui/material";
import backgroundImage from 'assets/image.png'


export const Wrapper = styled(Box)(({theme}) => ({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
}));