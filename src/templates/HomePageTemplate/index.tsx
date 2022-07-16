import { Typography } from "@mui/material";
import Button from "components/Button";
import DownloadLottie from "components/DownloadLottie";
import Logo from "components/Logo";
import { useNavigate } from "react-router-dom";

export default function HomePageTemplate() {
  const navigate = useNavigate()
  return (
    <>
      <Logo style={{
        marginBottom: '52px'
      }}/>
      <Button
        onClick={() => navigate('/about')}
      >
        About
      </Button>
      <Typography sx={{
        marginTop: '24px'
      }}>
        FrontEnd <strong>Engineer</strong><br/>
        <strong>UI|UX</strong> Design
      </Typography>
      <DownloadLottie/>
      </>
  )
}
