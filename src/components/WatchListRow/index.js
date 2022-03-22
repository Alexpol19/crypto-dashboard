import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import { Box, styled, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomRow = styled(TableRow)(
  ({ theme }) => `
        position: relative;
        cursor: pointer;
`
);

const WatchListRow = ({
  symbolData,
  handleClick,
  deleteLine,
}) => {
  const [hovered, setHovered] = React.useState(false)
  const deleteSymbol = (event, name) => {
    event.stopPropagation();
    deleteLine(name)
  }
  return (
    <CustomRow
      hover
      onClick={(event) => handleClick(event, symbolData.symbol)}
      role="checkbox"
      tabIndex={-1}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <TableCell
        component="th"
        scope="row"
        padding="normal"
      >
        {symbolData.exchangeName}
      </TableCell>
      <TableCell
        component="th"
        scope="row"
        padding="normal"
      >
        {symbolData.symbol}
      </TableCell>
      <TableCell align="right">{symbolData ? symbolData.price : ''}</TableCell>
      <TableCell align="right">{symbolData ? symbolData.change : ''}</TableCell>
      <TableCell align="right">{symbolData ? symbolData.delta : ''}</TableCell>
      <TableCell align="right">
        {symbolData ? symbolData.vol : ''}
      </TableCell>
      <TableCell align="right">
        {hovered ? (
          <Box position="absolute" top={5} right={0}>
            <Tooltip title="Delete">
              <IconButton onClick={(event) => deleteSymbol(event, symbolData.symbol)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        ) : <></>}
      </TableCell>
    </CustomRow>
  );
}

export default WatchListRow