import { Box, Button, Container, Grid, styled, Typography } from "@mui/material";
import PageTitleWrapper from "../../components/PageTitleWrapper";
// import { TVChartContainer } from "../../components/TVChartContainer";
import ccxt from "ccxt";
import { useEffect, useState } from "react";
import WatchList from "../../components/WatchList";
import OrderBook from "../../components/OrderBook";
import Trades from "../../components/Trades";

const GridContainer = styled(Grid)(
  ({ theme }) => `
        height: calc(100vh - 84px);
`
);

const GridFullHeight = styled(Grid)(
  ({ theme }) => `
        height: 100%;
`
);

const GridBigHeight = styled(Grid)(
  ({ theme }) => `
        height: 60%;
`
);

const GridSmallHeight = styled(Grid)(
  ({ theme }) => `
        height: 40%;
`
);

const MainPage = () => {
  const [symbols, setSymbols] = useState([])
  const [selected, setSelected] = useState([])
  const [selectedData, setSelectedData] = useState([])
  const [orders, setOrders] = useState([])
  const [trades, setTrades] = useState([])
  const getData = async () => {
    const exchange = await new ccxt.binance()
    console.log(exchange)

    await exchange.loadMarkets()
    // console.log(resp)
    // console.log(await exchange.market('1INCH/BTC'))//single market by symbol
    let exchangeSymbols = exchange.symbols //load only symbols
    setSymbols(exchangeSymbols)
    // console.log(await exchange.loadMarkets ())


    // const index = 4 // [ timestamp, open, high, low, close, volume ]
    // const ohlcv = await new ccxt.binance ().fetchOHLCV ('BTC/USDT', '1h')
    // console.log(ohlcv)
    
    // const lastPrice = ohlcv[ohlcv.length - 1][index] // closing price
    // console.log(lastPrice)
    // const series = ohlcv.slice (-80).map (x => x[index])         // closing price
    // console.log(series)
  }

  const getAllSymbolsData = async (array) => {
    const exchange = await new ccxt.binance()
    await exchange.loadMarkets()
    const newSymbolData = []

    async function getSymbolData (name) {
      const resp = await exchange.market(name)//single market by symbol
      // console.log(resp)
      const ticker = await exchange.fetchTicker(name)//single market by symbol
      // console.log(ticker)//

      // 1 day before(24 h)
      let since = exchange.milliseconds () - 86400000 // -1 day from now
      // alternatively, fetch from a certain starting datetime
      const respTrades = await exchange.fetchTrades(name)//current trades
      const dayBeforeTrades = await exchange.fetchTrades (name, since)//-24hours trades
      // from this two need to make calculations
      // -----

      console.log(respTrades)
      console.log(dayBeforeTrades)
    // ----

      let symbol = ticker.symbol,
      price = ticker.last,// same value in - close, vwap
      change = ticker.info.priceChange+'/'+ticker.info.priceChangePercent,
      delta = 1,
      vol = ticker.quoteVolume+'/'+ticker.percentage,//baseVolume, askVolume, bidVolume,
      exchangeName = 'Binance'//now by default
      return {
        exchangeName,
        symbol,
        price,
        change,
        delta,
        vol,
      };
    }

    for(const el of array) {
      const symbData = getSymbolData(el)
      newSymbolData.push(symbData)
    }
    Promise.all(newSymbolData).then(responses=>{
      setSelectedData(responses)
    }).catch(console.log)

  }

  const handleSymbolClick = async (event, name) => {
    const exchange = await new ccxt.binance()
    // console.log('fetchOrderBook', await exchange.fetchOrderBook(name))
    // setOrders()
    const respTrades = await exchange.fetchTrades(name)//current

    setTrades(respTrades.map(item=>({
      exchange: 'Binance',
      time: item.timestamp,
      price: item.price,
      amount: item.amount,
      type: item.side,
    })).reverse())
    // console.log('fetchOrders', await exchange.fetchOrders (name))// need apiKey? - maybe for authorized users
  };

  const deleteSymbol = (name) => {
    const data = selected.filter(item=> item !== name)
    setSelected(data)
  }

  useEffect(() => {
    if(selected.length) {
      getAllSymbolsData(selected)
    } else {
      getAllSymbolsData([])
    }
  }, [selected])//if changes selected inedxes(symbols) arrat need to fetch

  useEffect(() => {
    getData()
  }, [])

  let fakeOrders = [
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
    {
      amount: 0.1164,
      total: 40884,
      priceAsk: 40884,
      priceBid: 0.1164,
    },
  ]
  return (
    <Box>
      <PageTitleWrapper />
      <Box px={3} pt={2}>
        <GridContainer container spacing={2}>
          <GridFullHeight container item xs={6} flexWrap="wrap" spacing={2}>
            <GridBigHeight item xs={12}>
              {/* <TVChartContainer /> */}
            </GridBigHeight>
            <GridSmallHeight item xs={12}>
              <WatchList
                selected={selected}
                setSelected={setSelected}
                symbols={symbols}
                selectedData={selectedData}
                deleteSymbol={deleteSymbol}
                handleSymbolClick={handleSymbolClick}
                />
            </GridSmallHeight>
          </GridFullHeight>
          <GridFullHeight item xs={3}>
            <OrderBook
              orders={fakeOrders}
            />
          </GridFullHeight>
          <GridFullHeight item xs={3}>
            <Trades
              trades={trades}
            />
          </GridFullHeight>
        </GridContainer>
      </Box>
    </Box>
  )
}

export default MainPage;
