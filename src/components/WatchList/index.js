import { Paper, styled, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import SearchSymbolWrapper from '../SearchSymbolWrapper';
import WatchListTable from '../WatchListTable';

const TitleBox = styled(Paper)(
  ({ theme }) => `
    border-radius: 0;
`
);

const WatchList = ({
  symbols,
  selected,
  setSelected,
  selectedData,
  deleteSymbol,
  handleSymbolClick,
}) => {
  const [remained, setRemained] = useState([])

  useEffect(() => {
    setRemained(symbols.filter(item => {
      return !selected.includes(item)
    }))
  }, [symbols, selected])

  return (
    <Box height={'100%'}>
      <TitleBox>
        <Box display={'flex'} alignItems="center" justifyContent={'space-between'} bgcolor='#111633' px={1} pl={2} pb={0.5}>
          <Box>
            <Typography variant="body1">
              Watch List
            </Typography>
          </Box>
          <Box>
            <SearchSymbolWrapper
              options={remained}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Box>
      </TitleBox>
      <WatchListTable
        symbols={selectedData}
        deleteSymbol={deleteSymbol}
        handleSymbolClick={handleSymbolClick}
      />
    </Box>
  );
};

export default WatchList;
