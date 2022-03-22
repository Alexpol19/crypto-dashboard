import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material';

const CustomRow = styled(TableRow)(
  ({ theme }) => `
        position: relative;
`
);

const OrderBookRow = ({
  orderData,
}) => {
  return (
    <CustomRow
      hover
      role="checkbox"
      tabIndex={-1}
    >
      <TableCell
        component="th"
        scope="row"
        padding="normal"
      >
        {orderData.amount}
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        padding="normal"
      >
        {orderData.total}
      </TableCell>
      <TableCell align="right">{orderData ? orderData.priceAsk : ''}</TableCell>
      <TableCell align="right">{orderData ? orderData.priceBid : ''}</TableCell>
    </CustomRow>
  );
}

export default OrderBookRow