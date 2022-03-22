import { Paper, styled, Typography } from '@mui/material';
import { Box } from '@mui/material';
import TradesTable from '../TradesTable';

const TitleBox = styled(Paper)(
  ({ theme }) => `
    border-radius: 0;
`
);

const Trades = ({
  trades,
}) => {
  return (
    <Box height={'100%'}>
      <TitleBox>
        <Box display={'flex'} alignItems="center" justifyContent={'flex-end'} bgcolor='#111633' p={1} px={2}>
          <Box>
            <Typography variant="body1">
              Trades
            </Typography>
          </Box>
        </Box>
      </TitleBox>
      <TradesTable
        trades={trades}
      />
    </Box>
  );
};

export default Trades;
