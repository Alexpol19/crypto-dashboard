import { Container, Grid } from "@mui/material";
import PageTitleWrapper from "../../components/PageTitleWrapper";
import { TVChartContainer } from "../../components/TVChartContainer";
// import ccxt from "ccxt";
import { useEffect } from "react";

const MainPage = () => {
  const getData = async () => {
    // const ohlcv = await new ccxt.binance ().fetchOHLCV ('BTC/USDT', '1h')
    // console.log(ohlcv)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <Container maxWidth="xl">
      <PageTitleWrapper />
      <Grid container spacing={2}>
        <Grid container item xs={6} flexWrap="wrap" spacing={2}>
          <Grid item xs={12}>
            <TVChartContainer />
          </Grid>
          <Grid item xs={12}>
            WatchList
          </Grid>
        </Grid>
        <Grid item xs={3}>
        OrderBook
        </Grid>
        <Grid item xs={3}>
        Trades
        </Grid>
      </Grid>
    </Container>
  )
}

export default MainPage;
