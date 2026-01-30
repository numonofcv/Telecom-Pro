import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    IconButton,
    Grid,
    Divider
} from '@mui/material';
import {
    Copy,
    PhoneCall,
    Delete,
    CheckCircle
} from 'lucide-react';
import { USSD_CODES } from '../constants';

export const USSD = () => {
    const { t } = useTranslation(['ussd', 'common']);
    const [dialerInput, setDialerInput] = useState('');
    const [copied, setCopied] = useState(null);

    const handleDial = (key) => {
        if (dialerInput.length < 15) setDialerInput(prev => prev + key);
    };

    const handleDelete = () => {
        setDialerInput(prev => prev.slice(0, -1));
    };

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code);
        setCopied(code);
        setTimeout(() => setCopied(null), 2000);
    };

    const categories = ['ussd:categories.main', 'ussd:categories.internet', 'ussd:categories.services'];

    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>{t('ussd:title')}</Typography>
                <Typography color="text.secondary">{t('ussd:subtitle')}</Typography>
            </Box>

            <Grid container spacing={6}>
                <Grid item xs={12} md={7}>
                    <Stack spacing={6}>
                        {categories.map(catKey => (
                            <Box key={catKey}>
                                <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, color: '#0057FF' }}>{t(catKey)}</Typography>
                                <Grid container spacing={2}>
                                    {USSD_CODES.filter(c => c.category === catKey).map(item => (
                                        <Grid item xs={12} sm={6} key={item.code}>
                                            <Paper variant="outlined" sx={{ p: 3, borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', '&:hover': { borderColor: '#0057FF' } }}>
                                                <Box>
                                                    <Typography sx={{ fontWeight: 900, fontSize: '1.2rem' }}>{item.code}</Typography>
                                                    <Typography variant="caption" color="text.secondary">{t(item.description)}</Typography>
                                                </Box>
                                                <IconButton size="small" onClick={() => copyToClipboard(item.code)}>
                                                    {copied === item.code ? <CheckCircle size={18} color="#22CC88" /> : <Copy size={18} />}
                                                </IconButton>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        ))}
                    </Stack>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Paper sx={{ p: 4, bgcolor: '#0A1A3C', borderRadius: '48px', color: 'white', border: '10px solid #060D1D' }}>
                        <Box sx={{ height: 450, pt: 4, display: 'flex', flexDirection: 'column' }}>
                            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Typography sx={{ fontSize: '3rem', fontWeight: 900, letterSpacing: 4, mb: 2 }}>{dialerInput}</Typography>
                                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 4 }} />
                                <Grid container spacing={2} sx={{ maxWidth: 280, mx: 'auto' }}>
                                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'].map(key => (
                                        <Grid item xs={4} key={key}>
                                            <IconButton
                                                onClick={() => handleDial(key)}
                                                sx={{
                                                    width: 64,
                                                    height: 64,
                                                    bgcolor: 'rgba(255,255,255,0.05)',
                                                    color: 'white',
                                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' }
                                                }}
                                            >
                                                <Typography variant="h5" sx={{ fontWeight: 700 }}>{key}</Typography>
                                            </IconButton>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Stack direction="row" spacing={4} justifyContent="center" alignItems="center" sx={{ pb: 2 }}>
                                <Box sx={{ width: 48 }} />
                                <IconButton sx={{ width: 72, height: 72, bgcolor: '#22CC88', color: 'white', '&:hover': { bgcolor: '#1CAD73' } }}>
                                    <PhoneCall size={32} />
                                </IconButton>
                                <IconButton onClick={handleDelete} sx={{ color: 'rgba(255,255,255,0.3)' }}>
                                    <Delete size={24} />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default USSD;
