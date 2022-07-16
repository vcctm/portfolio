import Lottie from 'react-lottie'
import DownloadLottieDarkMode from 'assets/lotties/download_black.json'
import DownloadLottieWhiteMode from 'assets/lotties/download_white.json'
import ResumeLink from 'assets/Resume.pdf'
import { themeAtom } from 'store';
import { useRecoilState } from 'recoil';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion'

export default function DownloadLottie() {
  const [theme] = useRecoilState(themeAtom)

  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: theme === 'dark' ? DownloadLottieDarkMode : DownloadLottieWhiteMode,
    };
  
  return (
    <a
      href={ResumeLink}
      download
      style={{
        textDecoration: 'none'
      }}
    >
    <motion.div
      animate={{
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        repeat: Infinity
      }}
    >
      <Lottie
	      options={defaultOptions}
        height={150}
        width={200}
      />
         <Typography
        mt={-6}
      >
        <strong>Resume</strong>
      </Typography>
    </motion.div>
    </a>
  );
}