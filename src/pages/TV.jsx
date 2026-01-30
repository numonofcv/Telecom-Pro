import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
    Stack,
    Grid,
    Chip,
    Avatar,
    IconButton,
    Tabs,
    Tab,
    Divider
} from '@mui/material';
import {
    Play,
    Star,
    Info,
    Tv as TvIcon,
    Smartphone,
    Wifi,
    Globe
} from 'lucide-react';

const CHANNELS = [
    { name: 'Milliy TV', logo: 'https://milliy.tv/favicon.ico', category: 'General', live: true },
    { name: 'UzReport TV', logo: 'https://uzreport.news/favicon.ico', category: 'News', live: true },
    { name: 'Sport TV', logo: 'https://seeklogo.com/images/S/sport-tv-logo-0A6326E770-seeklogo.com.png', category: 'Sports', live: true },
    { name: 'Zo\'r TV', logo: 'https://zortv.uz/images/logo.png', category: 'Entertainment', live: false },
    { name: 'Sevimli', logo: 'https://sevimli.tv/assets/images/logo.png', category: 'General', live: true },
    { name: 'MTV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/MTV_Logo_2021.svg/1200px-MTV_Logo_2021.svg.png', category: 'Music', live: false }
];

const MOVIES = [
    { title: 'Dune: Part Two', year: '2024', rating: '9.0', duration: '2h 46m', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Oppenheimer', year: '2023', rating: '8.9', duration: '3h 0m', genre: 'Biography', image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=1000&auto=format&fit=crop' },
    { title: 'The Creator', year: '2023', rating: '7.8', duration: '2h 13m', genre: 'Action', image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Spider-Man: Across the Spider-Verse', year: '2023', rating: '8.7', duration: '2h 20m', genre: 'Animation', image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Inception', year: '2010', rating: '8.8', duration: '2h 28m', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Avatar: Way of Water', year: '2022', rating: '7.6', duration: '3h 12m', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop' },
    { title: 'Interstellar', year: '2014', rating: '8.6', duration: '2h 49m', genre: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop' },
    { title: 'The Dark Knight', year: '2008', rating: '9.0', duration: '2h 32m', genre: 'Action', image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1000&auto=format&fit=crop' }
];

export const TV = () => {
    const { t } = useTranslation(['tv', 'common']);
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Box sx={{ bgcolor: '#000', color: 'white', minHeight: '100vh' }}>
            <Box sx={{ position: 'relative', height: { xs: 'auto', md: '110vh' }, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
                <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2000&auto=format&fit=crop"
                    sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                />
                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #000 0%, transparent 50%, #000 100%), linear-gradient(to top, #000 0%, transparent 50%)' }} />

                <Container sx={{ position: 'relative', zIndex: 1, pt: { xs: 8, md: 25 }, pb: { xs: 8, md: 25 } }}>
                    <Stack spacing={3} sx={{ maxWidth: 600 }}>
                        <Typography variant="overline" sx={{ color: '#00E0FF', fontWeight: 900, letterSpacing: 4 }}>
                            {t('tv:hero.featureBadge')}
                        </Typography>
                        <Typography variant="h1" sx={{ fontWeight: 900, fontSize: { xs: '3.5rem', md: '5.5rem' }, lineHeight: 1, letterSpacing: '-2px' }}>
                            {t('tv:hero.title')} <br />
                            <span style={{ color: '#00E0FF' }}>{t('tv:hero.titleHighlight')}</span> {t('tv:hero.titleEnd')}
                        </Typography>
                        <Stack direction="row" spacing={3} alignItems="center">
                            <Chip label="IMDb 8.7" sx={{ bgcolor: '#F5C518', color: '#000', fontWeight: 900 }} />
                            <Typography variant="body1" sx={{ fontWeight: 700 }}>
                                2023 • 2h 20m • {t('tv:categories.3')}
                            </Typography>
                        </Stack>
                        <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400, lineHeight: 1.6, maxWidth: 500 }}>
                            {t('tv:hero.desc')}
                        </Typography>
                        <Stack direction="row" spacing={2} sx={{ pt: 4, pb: 4 }}>
                            <Button variant="contained" startIcon={<Play />} sx={{ bgcolor: '#0057FF', height: 60, px: 6, borderRadius: '20px', fontWeight: 800 }}>
                                {t('tv:hero.watchNow')}
                            </Button>
                            <Button variant="outlined" startIcon={<Info />} sx={{ height: 60, px: 4, borderRadius: '20px', fontWeight: 800, color: 'white', borderColor: 'rgba(255,255,255,0.3)', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.05)' } }}>
                                {t('tv:hero.moreInfo')}
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </Box>

            <Container sx={{ py: 10 }}>
                <Box sx={{ mb: 6, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <Tabs
                        value={activeTab}
                        onChange={(e, v) => setActiveTab(v)}
                        sx={{
                            '& .MuiTab-root': { color: 'rgba(255,255,255,0.5)', fontWeight: 800, fontSize: '1.2rem', textTransform: 'none', px: 4, py: 2 },
                            '& .Mui-selected': { color: '#00E0FF !important' },
                            '& .MuiTabs-indicator': { bgcolor: '#00E0FF', height: 4, borderRadius: 2 }
                        }}
                    >
                        <Tab label={t('tv:sections.allChannels')} />
                        <Tab label={t('tv:sections.movies')} />
                        <Tab label={t('tv:sections.smartEcosystem')} />
                    </Tabs>
                </Box>

                {activeTab === 0 && (
                    <Grid container spacing={4}>
                        {CHANNELS.map((ch, i) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                                <Paper sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', transform: 'translateY(-10px)' }, transition: 'all 0.3s' }}>
                                    <Stack direction="row" spacing={3} alignItems="center" mb={3}>
                                        <Avatar src={ch.logo} variant="rounded" sx={{ width: 64, height: 64 }} />
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 800 }}>{ch.name}</Typography>
                                            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>{ch.category}</Typography>
                                        </Box>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        {ch.live ? <Chip label={t('tv:channels.status')} size="small" sx={{ bgcolor: '#FF305A', fontWeight: 900, height: 20 }} /> : <Box sx={{ width: 40 }} />}
                                        <IconButton sx={{ color: '#0057FF' }}><Play /></IconButton>
                                    </Stack>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                )}

                {activeTab === 1 && (
                    <Grid container spacing={4}>
                        {MOVIES.map((movie, i) => (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                                <Box sx={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer', '&:hover img': { transform: 'scale(1.1)' }, '&:hover .overlay': { opacity: 1 } }}>
                                    <Box
                                        component="img"
                                        src={movie.image}
                                        sx={{ width: '100%', aspectRatio: '2/3', objectFit: 'cover', transition: 'transform 0.5s' }}
                                    />
                                    <Box className="overlay" sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.8)', display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 4, opacity: 0, transition: 'opacity 0.3s' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 900, mb: 2 }}>{movie.title}</Typography>
                                        <Stack direction="row" spacing={2} mb={3}>
                                            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: '#F5C518' }}>
                                                <Star size={14} fill="#F5C518" />
                                                <Typography variant="caption" sx={{ fontWeight: 800 }}>{movie.rating}</Typography>
                                            </Stack>
                                            <Typography variant="caption" sx={{ opacity: 0.7 }}>{movie.year}</Typography>
                                        </Stack>
                                        <Button variant="contained" fullWidth sx={{ bgcolor: '#0057FF', borderRadius: '12px' }}>{t('common:buttons.learnMore')}</Button>
                                    </Box>
                                </Box>
                                <Typography variant="h6" sx={{ mt: 2, fontWeight: 800, textAlign: 'center' }}>{movie.title}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                )}

                {activeTab === 2 && (
                    <Box>
                        <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 900, mb: 8, letterSpacing: '-2px' }}>{t('tv:sections.smartEcosystem')}</Typography>
                        <Grid container spacing={4}>
                            {[
                                { title: 'Smart Home', icon: <Globe size={40} />, color: '#0057FF' },
                                { title: 'Cloud Gaming', icon: <Smartphone size={40} />, color: '#00E0FF' },
                                { title: 'Online Cinema', icon: <TvIcon size={40} />, color: '#8B5CF6' }
                            ].map((item, i) => (
                                <Grid item xs={12} md={4} key={i}>
                                    <Paper sx={{ p: 6, textAlign: 'center', bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)', '&:hover': { border: `1px solid ${item.color}`, bgcolor: 'rgba(255,255,255,0.05)' }, transition: 'all 0.3s' }}>
                                        <Box sx={{ color: item.color, mb: 4 }}>{item.icon}</Box>
                                        <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>{item.title}</Typography>
                                        <Typography sx={{ opacity: 0.6, fontSize: '0.9rem', mb: 4 }}>{t('tv:ecosystem.desc')}</Typography>
                                        <Button variant="outlined" sx={{ borderRadius: '12px', borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>{t('common:buttons.learnMore')}</Button>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )}
            </Container>

            <Box sx={{ bgcolor: 'rgba(255,255,255,0.02)', py: 6 }}>
                <Container>
                    <Grid container spacing={10} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ borderRadius: '40px', overflow: 'hidden', boxShadow: '0 20px 80px rgba(0,0,0,0.5)' }}>
                                <img src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop" alt="TV" style={{ width: '100%', display: 'block' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>{t('tv:multiPlatform.title')}</Typography>
                            <Typography variant="h6" sx={{ opacity: 0.7, mb: 6, fontWeight: 400, lineHeight: 1.8 }}>{t('tv:multiPlatform.desc')}</Typography>
                            <Stack direction="row" spacing={3}>
                                <Stack spacing={1} alignItems="center">
                                    <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white', p: 3 }}><TvIcon size={32} /></IconButton>
                                    <Typography variant="caption">{t('tv:multiPlatform.smartTv')}</Typography>
                                </Stack>
                                <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', opacity: 0.1 }} />
                                <Stack spacing={1} alignItems="center">
                                    <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white', p: 3 }}><Smartphone size={32} /></IconButton>
                                    <Typography variant="caption">{t('tv:multiPlatform.mobile')}</Typography>
                                </Stack>
                                <Divider orientation="vertical" flexItem sx={{ borderStyle: 'dashed', opacity: 0.1 }} />
                                <Stack spacing={1} alignItems="center">
                                    <IconButton sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white', p: 3 }}><Wifi size={32} /></IconButton>
                                    <Typography variant="caption">{t('tv:multiPlatform.streaming')}</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default TV;
