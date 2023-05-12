import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from '@/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Dashboard, Predictions } from './pages';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { store } from '@/state/store';

setupListeners(store.dispatch);

function App() {
    const theme = createTheme(themeSettings);
    return (
        <div className="app">
            <Provider store={store}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Box
                            width="100%"
                            height="100%"
                            padding="1rem 2rem 4rem 2rem"
                        >
                            <Navbar />
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route
                                    path="/predictions"
                                    element={<Predictions />}
                                />
                            </Routes>
                        </Box>
                    </ThemeProvider>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
