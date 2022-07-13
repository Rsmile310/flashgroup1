import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography, Stack } from '@mui/material';
// components
import { MotionViewport, varFade } from '../animate';
import useLocales from '../../hooks/useLocales';
import DefautlBtn from '../DefaultBtn';
// ----------------------------------------------------------------------

const Img = styled('img')({
  maxWidth: '100%',
  height: 'auto',
});
const BoxStyle = styled(Box)({
  maxWidth: '1288px',
  margin: '20px auto',
  position: 'relative',
  paddingLeft: '24px',
  paddingRight: '24px',
});

// ----------------------------------------------------------------------

export default function HomeHero() {
  const { translate } = useLocales();
  return (
    <Box sx={{ lineHeight: '0', textAlign: 'center' }} id="home">
      <BoxStyle sx={{ paddingTop: { xs: '20px', sm: '60px', md: '90px', lg: '138px' } }}>
        <Img src="/assets/images/hero_bg.png" sx={{ position: 'absolute', top: '0', left: '16px', right: '16px' }} />
        <MotionViewport>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h1"
              sx={{
                color: '#B158E2',
                px: '8px',
              }}
            >
              {translate('We are Flash Group')}
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                px: '8px',
              }}
            >
              {translate('Financial Inclusion and Beyond')}
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Box sx={{ maxWidth: '911px', mx: 'auto', mt: 4 }}>
              <Typography
                variant="body1"
                sx={{
                  color: '#AB98AE',
                  px: '8px',
                }}
              >
                {translate('hero_desc')}
              </Typography>
            </Box>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Box sx={{ mt: 4 }}>
              <DefautlBtn />
            </Box>
          </m.div>
        </MotionViewport>
        <Img src="/assets/images/hero_img.png" />
        <MotionViewport>
          <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            justifyContent="space-between"
            sx={{ textAlign: 'left',paddingTop:'90px' }}
            id ="about" 
          >
            <Box sx={{ maxWidth: '584px', mb: 4 }}>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#fff',
                    px: '8px',
                  }}
                >
                  {translate('avant_grade_title1')}
                </Typography>
              </m.div>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="h2"
                  sx={{
                    color: '#B158E2',
                    px: '8px',
                  }}
                >
                  {translate('avant_grade_title2')}
                </Typography>
              </m.div>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#AB98AE',
                    px: '8px',
                    mt: 3,
                  }}
                >
                  {translate('avant_grade_text1')}
                </Typography>
              </m.div>
              <m.div variants={varFade().inRight}>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#AB98AE',
                    px: '8px',
                    mt: 1,
                  }}
                >
                  {translate('avant_grade_text2')}
                </Typography>
              </m.div>
            </Box>
            <m.div variants={varFade().inDown}>
              <Img
                src="/assets/images/avantgrade_img.png"
                width="400px"
                sx={{ mx: { xs: 'auto', sm: 'auto', md: 4 } }}
              />
            </m.div>
          </Stack>
        </MotionViewport>
      </BoxStyle>
    </Box>
  );
}
