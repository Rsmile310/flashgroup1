import { Stack, Link, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import Logo from '../../../components/Logo';
import Socials from './Socials';
import useLocales from '../../../hooks/useLocales';

const FooterStyle = styled('footer')(() => ({
  background: '#06062B',
  padding: '80px 0',
  color: '#838990',
  borderTop: '2px solid #53536D',
  //   [theme.breakpoints.down('sm')]: {
  //     padding: '24px',
  //   },
  '&>div': {
    maxWidth: '1440px',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '0 16px',
  },
}));
const LinkStyle = styled(Link)({
  fontWeight: 'lighter',
  '&:hover': {
    color: '#B158E2',
  },
  color: 'white',
  fontSize: '16px',
  transition: 'all ease 400ms',
});

export default function Footer() {
  const { translate } = useLocales();
  const footerData = [
    {
      text: 'TermsConditions',
      url: 'https://flashgroup.io/terms_and_conditions',
    },
    {
      text: 'PrivacyPolicy',
      url: 'https://flashgroup.io/privacy_policy',
    },
    {
      text: 'UseofCookies',
      url: 'https://flashgroup.io/use_of_cookies',
    },
  ];
  return (
    <FooterStyle>
      <Stack
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ px: { xs: '24px', lg: '48px' }, mb: '24px' }}
      >
        <Logo type={'full'} />
        <Stack direction="row" spacing={2} sx={{ mt: { xs: '24px', lg: '0' } }}>
          {Socials.map((e, index) => (
            <div key={index}>
              <LinkStyle href={e.url}>
                <Box component="img" src={e.img} />
              </LinkStyle>
            </div>
          ))}
        </Stack>
      </Stack>
      <Stack mx={3} direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between">
        <Box textAlign="center" sx={{ order: { xs: '3', sm: '3', lg: '1' } }}>
          <Typography variant="body2">{translate('FOOTER_TEXT1')}</Typography>
        </Box>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" sx={{ order: '2' }}>
          {footerData.map((e, index) => (
            <LinkStyle key={index} href={e.url}>
              <Typography variant="body2">{translate(e.text)}</Typography>
            </LinkStyle>
          ))}
        </Stack>
      </Stack>
    </FooterStyle>
  );
}
