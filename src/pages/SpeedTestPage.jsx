import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
    Stack,
    CircularProgress,
    Alert
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    Activity,
    Wifi,
    ShieldCheck,
    Server,
    Globe,
    RefreshCw
} from 'lucide-react';

export const SpeedTestPage = () => {
    const { t } = useTranslation(['speedtest', 'common']);
    const [stage, setStage] = useState('idle');
    const [download, setDownload] = useState(0);
    const [upload, setUpload] = useState(0);
    const [ping, setPing] = useState(0);
    const [jitter, setJitter] = useState(0);
    const [progress, setProgress] = useState(0);

    const startTest = () => {
        setStage('testing');
        setDownload(0);
        setUpload(0);
        setPing(0);
        setJitter(0);
        setProgress(0);

        let p = 0;
        const interval = setInterval(() => {
            p += 1;
            setProgress(p);

            if (p <= 40) {
                setPing(Math.floor(Math.random() * 5) + 2);
                setJitter(Math.floor(Math.random() * 2) + 1);
                setDownload(Math.floor(Math.random() * 200) + 750);
            } else if (p > 40 && p <= 80) {
                setUpload(Math.floor(Math.random() * 150) + 400);
            }

            if (p >= 100) {
                clearInterval(interval);
                setStage('results');
            }
        }, 80);
    };

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: '#0A1A3C', color: 'white', py: 10, position: 'relative', overflow: 'hidden' }}>
            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                <Box sx={{ position: 'absolute', top: '25%', left: '25%', width: 500, height: 500, bgcolor: 'rgba(0, 87, 255, 0.1)', filter: 'blur(150px)', borderRadius: '50%' }} />
                <Box sx={{ position: 'absolute', bottom: '25%', right: '25%', width: 500, height: 500, bgcolor: 'rgba(0, 224, 255, 0.1)', filter: 'blur(150px)', borderRadius: '50%' }} />
            </Box>

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
                        {t('title')} <span style={{ color: '#00E0FF' }}>{t('networkIntelligence')}</span>
                    </Typography>
                    <Typography color="rgba(255,255,255,0.6)">{t('subtitle')}</Typography>
                </Box>

                <Paper sx={{ p: { xs: 4, md: 8 }, bgcolor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', borderRadius: '60px', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                    <Stack alignItems="center">
                        <Box sx={{ position: 'relative', width: { xs: 260, md: 320 }, height: { xs: 260, md: 320 }, mb: 8 }}>
                            <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                                <circle
                                    cx="50" cy="50" r="45"
                                    fill="none"
                                    stroke="url(#speedGradient)"
                                    strokeWidth="6"
                                    strokeDasharray="283"
                                    strokeDashoffset={283 - (progress * 2.83)}
                                    strokeLinecap="round"
                                    style={{ transition: 'stroke-dashoffset 0.1s linear' }}
                                />
                                <defs>
                                    <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#0057FF" />
                                        <stop offset="100%" stopColor="#00E0FF" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <Box sx={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                {stage === 'idle' ? (
                                    <Button
                                        variant="contained"
                                        onClick={startTest}
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            borderRadius: '50%',
                                            bgcolor: '#0057FF',
                                            boxShadow: '0 20px 40px rgba(0,87,255,0.4)',
                                            fontSize: '1.5rem',
                                            fontWeight: 900,
                                            '&:hover': { bgcolor: '#0046CC' }
                                        }}
                                    >
                                        {t('go')}
                                    </Button>
                                ) : (
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Typography variant="h2" sx={{ fontWeight: 900, background: 'linear-gradient(to right, #0057FF, #00E0FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                            {progress <= 40 ? download : (progress <= 80 ? upload : (stage === 'results' ? download : '...'))}
                                        </Typography>
                                        <Typography variant="caption" sx={{ fontWeight: 800, opacity: 0.5, letterSpacing: 2, textTransform: 'uppercase' }}>{t('mbps')}</Typography>
                                    </Box>
                                )}
                            </Box>
                        </Box>

                        <Grid container spacing={4} sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 6 }}>
                            {[
                                { label: t('metrics.ping'), value: ping, unit: 'ms', icon: <Activity size={16} /> },
                                { label: t('metrics.jitter'), value: jitter, unit: 'ms', icon: <Wifi size={16} /> },
                                { label: t('metrics.download'), value: download, unit: t('mbps'), icon: <Globe size={16} /> },
                                { label: t('metrics.upload'), value: upload, unit: t('mbps'), icon: <Server size={16} /> }
                            ].map((m, i) => (
                                <Grid item xs={6} md={3} key={i}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ opacity: 0.5, mb: 1 }}>
                                            {m.icon}
                                            <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase' }}>{m.label}</Typography>
                                        </Stack>
                                        <Typography variant="h5" sx={{ fontWeight: 900 }}>{m.value || '--'} <span style={{ fontSize: '0.6rem', color: '#00E0FF' }}>{m.unit}</span></Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>

                        {stage === 'results' && (
                            <Stack spacing={3} sx={{ mt: 8, width: '100%' }}>
                                <Alert icon={<ShieldCheck color="#10B981" />} sx={{ bgcolor: 'rgba(16, 185, 129, 0.1)', color: 'white', borderRadius: '24px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{t('result.title')}</Typography>
                                    <Typography variant="caption" color="rgba(255,255,255,0.6)">{t('result.desc')}</Typography>
                                </Alert>
                                <Button fullWidth variant="outlined" startIcon={<RefreshCw size={20} />} onClick={startTest} sx={{ height: 56, borderRadius: '16px', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                                    {t('retest')}
                                </Button>
                            </Stack>
                        )}
                    </Stack>
                </Paper>

                <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', mt: 4, opacity: 0.5 }}>
                    {t('server')}{new Date().toLocaleDateString()}
                </Typography>
            </Container>
        </Box>
    );
};

export default SpeedTestPage;
