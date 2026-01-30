import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Paper,
    Typography,
    Grid,
    Button,
    Stack,
    LinearProgress
} from '@mui/material';
import {
    Activity,
    Gauge,
    Wifi
} from 'lucide-react';

export const SpeedTest = () => {
    const { t } = useTranslation(['forms', 'common']);
    const [testing, setTesting] = useState(false);
    const [download, setDownload] = useState(0);
    const [upload, setUpload] = useState(0);
    const [ping, setPing] = useState(0);
    const [progress, setProgress] = useState(0);

    const startTest = () => {
        setTesting(true);
        setDownload(0);
        setUpload(0);
        setPing(0);
        setProgress(0);

        let p = 0;
        const interval = setInterval(() => {
            p += 2;
            setProgress(p);
            if (p <= 50) {
                setDownload(Math.floor(Math.random() * 950) + 50);
                setPing(Math.floor(Math.random() * 20) + 1);
            } else {
                setUpload(Math.floor(Math.random() * 800) + 40);
            }

            if (p >= 100) {
                clearInterval(interval);
                setTesting(false);
            }
        }, 100);
    };

    return (
        <Paper sx={{ p: 4, bgcolor: '#0A1A3C', color: 'white', borderRadius: '32px', position: 'relative', overflow: 'hidden' }}>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: 'transparent', '& .MuiLinearProgress-bar': { bgcolor: '#0057FF' } }}
            />

            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Activity color="#00E0FF" />
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>{t('forms:speedtest.title')}</Typography>
                </Stack>
                <Wifi size={20} color="#94A3B8" className={testing ? 'animate-pulse' : ''} />
            </Stack>

            <Grid container spacing={3} sx={{ mb: 4 }}>
                <Grid item xs={4}>
                    <Box textAlign="center">
                        <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.5 }}>Ping</Typography>
                        <Typography variant="h5" sx={{ fontWeight: 900 }}>{ping}<span style={{ fontSize: '0.6rem', color: '#00E0FF' }}>ms</span></Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ borderLeft: '1px solid rgba(255,255,255,0.1)', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
                    <Box textAlign="center">
                        <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.5 }}>Download</Typography>
                        <Typography variant="h5" sx={{ fontWeight: 900, color: '#00E0FF' }}>{download}<span style={{ fontSize: '0.6rem', color: 'white' }}>Mbps</span></Typography>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box textAlign="center">
                        <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.5 }}>Upload</Typography>
                        <Typography variant="h5" sx={{ fontWeight: 900 }}>{upload}<span style={{ fontSize: '0.6rem', color: '#00E0FF' }}>Mbps</span></Typography>
                    </Box>
                </Grid>
            </Grid>

            <Button
                fullWidth
                disabled={testing}
                onClick={startTest}
                variant="contained"
                startIcon={<Gauge size={18} />}
                sx={{ height: 56, borderRadius: '16px', bgcolor: '#0057FF' }}
            >
                {testing ? t('forms:speedtest.analyzing') : t('forms:speedtest.begin')}
            </Button>

            <Typography variant="caption" sx={{ display: 'block', mt: 2, textAlign: 'center', opacity: 0.3 }}>{t('forms:speedtest.poweredBy')}</Typography>
        </Paper>
    );
};

export default SpeedTest;
