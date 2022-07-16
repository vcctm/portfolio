import { Typography } from "@mui/material";

export default function AboutPageTemplate() {
  return (
    <>
      <Typography fontWeight={'bold'} fontSize={40}>
        Víctor Miranda
      </Typography>
      <Typography sx={{
        marginTop: '24px',
        maxWidth: '340px'
      }}>
        <strong>Hello!</strong> I'm a front-end software engineer, working at <strong>Bank of America</strong>,
        passionate with technology since teen age, Brazilian 🇧🇷 ! <br/> Love to travel and meet people!
      </Typography>
      </>
  )
}
