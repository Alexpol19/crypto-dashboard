import { Paper, styled, Typography } from '@mui/material';
import { Box } from '@mui/material';
import OrderBookTable from '../OrderBookTable';

const TitleBox = styled(Paper)(
  ({ theme }) => `
    border-radius: 0;
`
);

const OrderBook = ({
  orders,
}) => {
  return (
    <Box height={'100%'}>
      <TitleBox>
        <Box display={'flex'} alignItems="center" justifyContent={'flex-end'} bgcolor='#111633' p={1}  px={2}>
          <Box>
            <Typography variant="body1">
              Order Book
            </Typography>
          </Box>
        </Box>
      </TitleBox>
      <OrderBookTable
        orders={orders}
      />
    </Box>
  );
};

export default OrderBook;
