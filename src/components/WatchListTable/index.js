import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import WatchListRow from '../WatchListRow';
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
    id: 'symbol',
    numeric: false,
    disablePadding: false,
    label: 'Symbol',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'change',
    numeric: true,
    disablePadding: false,
    label: 'Change ($/%)',
  },
  {
    id: 'delta',
    numeric: true,
    disablePadding: false,
    label: 'Delta ($/%)',
  },
  {
    id: 'vol',
    numeric: true,
    disablePadding: false,
    label: 'Vol ($/%)',
  },
  {
    id: 'empty',
    numeric: true,
    disablePadding: false,
    label: '',
  },
];

function EnhancedTableHead() {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
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

const WatchListTable = ({
  symbols,
  deleteSymbol,
  handleSymbolClick,
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
              {symbols && symbols.length ? symbols
                .map((row, index) => (
                  <WatchListRow
                    key={row.symbol}
                    symbolData={row}
                    handleClick={handleSymbolClick}
                    deleteLine={deleteSymbol}
                  />
                )) : null}
            </TableBody>
          </Table>
        </TableContainer>
      </TablePaper>
    </Box>
  );
}

export default WatchListTable