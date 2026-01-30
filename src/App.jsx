import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './i18n';

import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { Header, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Cabinet } from './pages/Cabinet';
import { Coverage } from './pages/Coverage';
import { USSD } from './pages/USSD';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import { Auth } from './pages/Auth';
import { Internet } from './pages/Internet';
import { Mobile } from './pages/Mobile';
import { Business } from './pages/Business';
import { TV } from './pages/TV';
import { Payment } from './pages/Payment';
import { SpeedTestPage } from './pages/SpeedTestPage';
import { Admin } from './pages/Admin';
import { Careers } from './pages/Careers';
import { UserProvider } from './context/UserContext';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6366F1',
            light: '#818CF8',
            dark: '#4F46E5',
        },
        secondary: {
            main: '#0F172A',
        },
        background: {
            default: '#F8FAFC',
            paper: '#FFFFFF',
        },
        accent: {
            main: '#A855F7',
        }
    },
    typography: {
        fontFamily: '"Outfit", "Inter", sans-serif',
        h1: { fontWeight: 900, letterSpacing: '-0.02em' },
        h2: { fontWeight: 900, letterSpacing: '-0.02em' },
        h3: { fontWeight: 800, letterSpacing: '-0.01em' },
        h4: { fontWeight: 800, letterSpacing: '-0.01em' },
        h5: { fontWeight: 700 },
        h6: { fontWeight: 700 },
    },
    shape: { borderRadius: 24 },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 700,
                    borderRadius: '20px',
                    padding: '12px 24px',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)',
                    boxShadow: '0 10px 20px rgba(99, 102, 241, 0.2)',
                    '&:hover': {
                        boxShadow: '0 15px 25px rgba(99, 102, 241, 0.3)',
                        transform: 'translateY(-1px)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '32px',
                    boxShadow: '0 20px 40px rgba(15, 23, 42, 0.05)',
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                },
            },
        },
    },
});

function App() {
    const location = useLocation();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <UserProvider>
                <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <Header />
                    <main style={{ flexGrow: 1, position: 'relative', overflow: 'hidden' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={location.pathname}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: 'easeOut' }}
                            >
                                <Routes location={location} key={location.pathname}>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/cabinet" element={<Cabinet />} />
                                    <Route path="/coverage" element={<Coverage />} />
                                    <Route path="/ussd" element={<USSD />} />
                                    <Route path="/blog" element={<Blog />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/auth" element={<Auth />} />
                                    <Route path="/internet" element={<Internet />} />
                                    <Route path="/mobile" element={<Mobile />} />
                                    <Route path="/business" element={<Business />} />
                                    <Route path="/tv" element={<TV />} />
                                    <Route path="/payment" element={<Payment />} />
                                    <Route path="/speedtest" element={<SpeedTestPage />} />
                                    <Route path="/careers" element={<Careers />} />
                                    <Route path="/admin" element={<Admin />} />
                                </Routes>
                            </motion.div>
                        </AnimatePresence>
                    </main>
                    <Footer />
                </div>
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;
