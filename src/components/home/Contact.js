import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
// components
import { MotionViewport, varFade, varBounce } from '../animate';
import useLocales from '../../hooks/useLocales';

const BoxStyle = styled(Box)({
  width: '1280px',
  maxWidth: '100%',
  margin: '0 auto',
  textAlign: 'center',
  padding: '86px 24px 60px',
});
const ButtonStyle = styled(Button)({
  display: 'flex',
  backgroundColor: '#B158E2',
  color: '#fff',
  marginTop: '24px',
  width: '140px',
  borderRadius: '24px',
  '&:hover': {
    color: '#000',
    backgroundColor: '#fff',
  },
  '& input': {
    color: '#fff',
    background: '#fff',
  },
});

export default function Contact() {
  const { translate } = useLocales();
  const defaultValue = {
    name: '',
    email: '',
    subject: '',
    msg: '',
  };
  const [formValue, setFormValue] = useState(defaultValue);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue);
  };

  return (
    <BoxStyle id="contact">
      <MotionViewport>
        <Box>
          <m.div variants={varFade().inUp}>
            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                px: '8px',
              }}
            >
              {translate('Get_In_touch')}
            </Typography>
          </m.div>
          <m.div variants={varBounce().in}>
            <Grid container sx={{ mt: 5, background: '#181844', p: '48px', borderRadius: '20px' }}>
              <Grid item xs={12} sm={6}>
                <Box
                  component="form"
                  sx={{
                    '& > :not(button)': { my: 1, width: '100%' },
                  }}
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <TextField
                    id="outlined-basic"
                    name="name"
                    label="Name"
                    type="text"
                    value={formValue.name}
                    onChange={handleInputChange}
                    required
                  />
                  <TextField
                    id="outlined-basic"
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={formValue.email}
                    onChange={handleInputChange}
                    required
                  />
                  <TextField
                    id="outlined-basic"
                    name="subject"
                    label="Subject"
                    variant="outlined"
                    type="text"
                    value={formValue.subject}
                    onChange={handleInputChange}
                    required
                  />
                  <TextField
                    id="outlined-multiline-static"
                    name="msg"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    type="text"
                    value={formValue.msg}
                    onChange={handleInputChange}
                    required
                  />
                  <ButtonStyle variant="default" color="primary" type="submit" sx={{ backgroundColor: '#B158E2' }}>
                    {translate('Send')}
                  </ButtonStyle>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box component="img" src="/assets/images/contact_img.png" />
              </Grid>
            </Grid>
          </m.div>
        </Box>
      </MotionViewport>
    </BoxStyle>
  );
}
