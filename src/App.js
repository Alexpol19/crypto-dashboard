import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import ThemeProvider from './theme/ThemeProvider';
import { CssBaseline } from '@mui/material';
import MainPage from './pages/MainPage';
import './App.css';

const App = () => {

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        <MainPage />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
