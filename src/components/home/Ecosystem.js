import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography, Stack, Grid } from '@mui/material';
// components
import { MotionViewport, varFade } from '../animate';
import useLocales from '../../hooks/useLocales';
import EcosystemConfig from './HomeConfig';

const BoxStyle = styled(Box)({
  width: '1280px',
  maxWidth: '100%',
  margin: '0 auto',
  textAlign: 'center',
  padding: '90px 24px 0',
});
const Card = styled(Box)({
  background: '#181844',
  borderRadius: '25px',
  textAlign: 'center',
  padding: '50px 16px',
  height: '100%',
  '& img': {
    margin: '0 auto',
  },
  '& h4': {
    margin: '24px auto',
  },
});
export default function Ecosystem() {
  const { translate } = useLocales();
  return (
    <BoxStyle id="services">
      <MotionViewport>
        <Box sx={{ mt: 4 }}>
          <m.div variants={varFade().inUp}>
            <Stack direction="row" justifyContent="center">
              <Typography
                variant="h2"
                sx={{
                  color: '#fff',
                  px: '8px',
                }}
              >
                {translate('Our')}
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  color: '#B158E2',
                  px: '8px',
                }}
              >
                {translate('Ecosystem')}
              </Typography>
            </Stack>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="body2"
              sx={{
                color: '#AB98AE',
                px: '8px',
                mt: 3,
                maxWidth: '930px',
                mx: 'auto',
              }}
            >
              {translate('ecosystem_text1')}
            </Typography>
          </m.div>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            {EcosystemConfig.map((data, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <m.div variants={varFade().inUp} style={{height: '100%'}}>
                  <Card>
                    <img src={data.logo} alt="logo" />
                    <Typography variant="h4" color="white">
                      {translate(data.name)}
                    </Typography>
                    <Typography variant="body2" color="#AB98AE">
                      {translate(data.desc)}
                    </Typography>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </MotionViewport>
    </BoxStyle>
  );
}
