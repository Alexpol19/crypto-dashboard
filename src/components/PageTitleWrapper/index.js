import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import AuthModal from '../AuthModal';

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(2, 0)};
        padding-bottom: ${theme.spacing(3)};
`
);

const TopLine = styled(Box)(
  ({ theme }) => `
        height: ${theme.spacing(0.3)};
        background-color: #b1aeae59;
        width: 100%;
        border-radius: ${theme.spacing(0.5)};
        margin-top: ${theme.spacing(0.5)};
`
);

const PageTitleWrapper = () => {
  return (
    <PageTitle>
      <Grid container justifyContent="space-between" alignItems={'center'}>
        <Grid item>
          <Typography variant="body1">
            Your name
          </Typography>
        </Grid>
        <Grid item>
          <AuthModal
            dialogTitle={'Login with your credencials'}
            buttonText={'Login'}
            type="login" />
          <AuthModal
            dialogTitle={'Register new user'}
            buttonText={'Registration'}
            type="registration" />
        </Grid>
      </Grid>
      <TopLine />
    </PageTitle>
  );
};

export default PageTitleWrapper;
