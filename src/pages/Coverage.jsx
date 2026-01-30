import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Container,
    Typography,
    Paper,
    TextField,
    Button,
    Stack,
    CircularProgress,
    Divider,
    Alert,
    Chip
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    Search,
    Target,
    List
} from 'lucide-react';

export const Coverage = () => {
    const { t } = useTranslation(['coverage', 'common']);
    const [zip, setZip] = useState('');
    const [checking, setChecking] = useState(false);
    const [result, setResult] = useState(null);
    const [isLocating, setIsLocating] = useState(false);
    const mapRef = useRef(null);
    const userMarkerRef = useRef(null);

    const initMap = () => {
        if (typeof window !== 'undefined' && window.L && !mapRef.current) {
            const L = window.L;
            const map = L.map('map-container').setView([41.2995, 69.2401], 12);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);

            L.circle([41.3111, 69.2797], { color: '#0057FF', fillColor: '#0057FF', fillOpacity: 0.3, radius: 2000 }).addTo(map).bindPopup(t('coverage:popups.fiber'));
            L.circle([41.2858, 69.2035], { color: '#00E0FF', fillColor: '#00E0FF', fillOpacity: 0.3, radius: 1500 }).addTo(map).bindPopup(t('coverage:popups.fiveG'));

            mapRef.current = map;
        }
    };

    const handleGeolocation = () => {
        if (!navigator.geolocation) {
            alert(t('coverage:alerts.geoNotSupported'));
            return;
        }

        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const L = window.L;

                if (mapRef.current) {
                    mapRef.current.setView([latitude, longitude], 15);
                    if (userMarkerRef.current) {
                        userMarkerRef.current.setLatLng([latitude, longitude]);
                    } else {
                        userMarkerRef.current = L.circleMarker([latitude, longitude], {
                            radius: 8,
                            fillColor: "#0057FF",
                            color: "#fff",
                            weight: 3,
                            opacity: 1,
                            fillOpacity: 1
                        }).addTo(mapRef.current).bindPopup(t('coverage:alerts.youAreHere')).openPopup();
                    }

                    setChecking(true);
                    setTimeout(() => {
                        setResult(Math.random() > 0.3);
                        setChecking(false);
                        setIsLocating(false);
                    }, 1500);
                }
            },
            () => {
                alert(t('coverage:alerts.geoFailed'));
                setIsLocating(false);
            }
        );
    };

    useEffect(() => {
        initMap();
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
        <Container maxWidth="lg" sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>{t('coverage:title')}</Typography>
                <Typography color="text.secondary">{t('coverage:subtitle')}</Typography>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Stack spacing={4}>
                        <Paper sx={{ p: 4, borderRadius: '32px' }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Search size={20} color="#0057FF" /> {t('coverage:search.title')}
                            </Typography>

                            <Button
                                fullWidth
                                variant="outlined"
                                startIcon={isLocating ? <CircularProgress size={16} /> : <Target size={18} />}
                                onClick={handleGeolocation}
                                disabled={isLocating}
                                sx={{ height: 56, borderRadius: '16px', mb: 3 }}
                            >
                                {isLocating ? t('coverage:search.locating') : t('coverage:search.locateButton')}
                            </Button>

                            <Divider sx={{ mb: 3 }}><Typography variant="caption" sx={{ fontWeight: 700, color: '#94A3B8' }}>{t('coverage:search.or')}</Typography></Divider>

                            <Stack spacing={2}>
                                <TextField
                                    fullWidth
                                    placeholder={t('coverage:search.placeholder')}
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                />
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={() => { setChecking(true); setTimeout(() => { setResult(Math.random() > 0.2); setChecking(false); }, 1500); }}
                                    sx={{ height: 56, bgcolor: '#0057FF' }}
                                >
                                    {checking ? <CircularProgress size={24} color="inherit" /> : t('coverage:search.checkButton')}
                                </Button>
                            </Stack>

                            {result !== null && (
                                <Alert
                                    severity={result ? "success" : "warning"}
                                    sx={{ mt: 3, borderRadius: '16px', '& .MuiAlert-message': { width: '100%' } }}
                                >
                                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{result ? t('coverage:result.success.title') : t('coverage:result.warning.title')}</Typography>
                                    <Typography variant="caption">{result ? t('coverage:result.success.desc') : t('coverage:result.warning.desc')}</Typography>
                                </Alert>
                            )}
                        </Paper>

                        <Paper sx={{ p: 4, bgcolor: '#0A1A3C', color: 'white', borderRadius: '32px' }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>{t('coverage:legend.title')}</Typography>
                            <Stack spacing={2}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#00E0FF' }} />
                                        <Typography variant="body2">{t('coverage:legend.fiber')}</Typography>
                                    </Stack>
                                    <Chip label={t('coverage:legend.ready')} size="small" sx={{ bgcolor: 'rgba(0, 224, 225, 0.1)', color: '#00E0FF', fontWeight: 700 }} />
                                </Stack>
                                <Stack direction="row" justifyContent="space-between" alignItems="center">
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#0057FF' }} />
                                        <Typography variant="body2">{t('coverage:legend.fiveG')}</Typography>
                                    </Stack>
                                    <Chip label={t('coverage:legend.active')} size="small" sx={{ bgcolor: 'rgba(0, 87, 255, 0.1)', color: '#0057FF', fontWeight: 700 }} />
                                </Stack>
                            </Stack>
                        </Paper>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper sx={{ height: 600, borderRadius: '48px', overflow: 'hidden', position: 'relative', border: '1px solid #eee' }}>
                        <Box id="map-container" sx={{ width: '100%', height: '100%', zIndex: 1 }} />
                        <Box sx={{ position: 'absolute', bottom: 20, left: 20, right: 20, bgcolor: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', px: 3, py: 1.5, borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1000 }}>
                            <Typography variant="caption" sx={{ fontWeight: 800, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <List size={14} /> {t('coverage:map.title')}
                            </Typography>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Box sx={{ width: 6, height: 6, bgcolor: '#22CC88', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
                                <Typography variant="caption" sx={{ fontWeight: 800 }}>{t('coverage:map.liveUpdate')}</Typography>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Coverage;
