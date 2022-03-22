import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import AuthModal from '../AuthModal';

const PageTitle = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(1, 3)};
        border-bottom: ${theme.spacing(0.3)} solid #b1aeae59;
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
          <Box pl={1} display="inline-block">
            <AuthModal
              dialogTitle={'Register new user'}
              buttonText={'Registration'}
              type="registration" />
          </Box>
        </Grid>
      </Grid>
    </PageTitle>
  );
};

export default PageTitleWrapper;
