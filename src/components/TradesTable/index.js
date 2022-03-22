import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TradesRow from '../TradesRow';
import { styled } from '@mui/material/styles';

const TableHeadCell = styled(TableCell)(
  ({ theme }) => `
        text-transform: capitalize;
`
);

const TablePaper = styled(Paper)(
  ({ theme }) => `
        background-color: transparent;
        border-radius: 0;
        height: 100%;
`
);

const headCells = [
  {
    id: 'exchange',
    numeric: false,
    disablePadding: false,
    label: 'Exchange',
  },
  {
    id: 'time',
    numeric: false,
    disablePadding: false,
    label: 'Time',
  },
  {
    id: 'price',
    numeric: false,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: 'Amount',
  },
  {
    id: 'type',
    numeric: true,
    disablePadding: false,
    label: 'Type',
  },
];
function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, i) => (
          <TableHeadCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
          >
            {headCell.label}
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const TradesTable = ({
  trades,
}) => {
  return (
    <Box sx={{ width: '100%' }} height={'calc(100% - 40px)'}>
      <TablePaper sx={{ width: '100%', mb: 2 }}>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table
            // sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
            stickyHeader 
          >
            <EnhancedTableHead />
            <TableBody>
              {trades && trades.length ? trades
                .map((row, index) => (
                  <TradesRow
                    key={`${row.amount}-${index}`}
                    tradeData={row}
                  />
                )) : null}
            </TableBody>
          </Table>
        </TableContainer>
      </TablePaper>
    </Box>
  );
}

export default TradesTable