import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const DialogTitleBox = styled(DialogTitle)(
  ({ theme }) => `
        padding-top: ${theme.spacing(4)};
`
);

const AuthModal = ({
  dialogTitle,
  buttonText,
  type,
}) => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        {buttonText}
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitleBox id="responsive-dialog-title">
          {dialogTitle}
        </DialogTitleBox>
        <DialogContent>
          {type === 'registration' ? (
            <>
              <TextField
                autoFocus
                margin="dense"
                id="fname"
                label="First Name"
                type="text"
                fullWidth
                variant="standard"
              />
              <Box display={'inline-block'} py={1} width="100%">
                <TextField
                  autoFocus
                  margin="dense"
                  id="lname"
                  label="Last Name"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </Box>
            </>
          ) : null}
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <Box display={'inline-block'} pt={1} width="100%">
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose} autoFocus>
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

AuthModal.propTypes = {
  dialogTitle: PropTypes.string,
  buttonText: PropTypes.string,
  type: PropTypes.oneOf([
    'login',
    'registration',
  ])
};

export default AuthModal