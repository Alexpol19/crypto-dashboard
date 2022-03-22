import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material';
import { format } from 'date-fns'

const CustomRow = styled(TableRow)(
  ({ theme }) => `
        position: relative;
`
);

const TradesRow = ({
  tradeData,
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
        {tradeData.exchange}
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        padding="normal"
      >
        {format(tradeData.time, "HH:mm:ss")}
      </TableCell>
      <TableCell align="right">{tradeData ? tradeData.price : ''}</TableCell>
      <TableCell align="right">{tradeData ? tradeData.amount : ''}</TableCell>
      <TableCell align="right">{tradeData ? tradeData.type : ''}</TableCell>
    </CustomRow>
  );
}

export default TradesRow