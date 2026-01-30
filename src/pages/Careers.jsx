import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Button,
    Avatar
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    MapPin,
    Clock,
    ArrowRight,
    Star,
    Heart,
    Coffee,
    Laptop
} from 'lucide-react';

export const Careers = () => {
    const { t } = useTranslation(['careers', 'common']);
    const jobs = t('jobs.list', { returnObjects: true });

    const BENEFITS = [
        { icon: <Coffee />, title: t('benefits.comfort.title'), desc: t('benefits.comfort.desc') },
        { icon: <Heart />, title: t('benefits.health.title'), desc: t('benefits.health.desc') },
        { icon: <Laptop />, title: t('benefits.tech.title'), desc: t('benefits.tech.desc') },
        { icon: <Star />, title: t('benefits.growth.title'), desc: t('benefits.growth.desc') }
    ];

    return (
        <Box>
            <Box sx={{ bgcolor: '#0A1A3C', color: 'white', py: 15, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5.5rem' }, fontWeight: 900, mb: 4 }}>
                        {t('hero.title')} <span style={{ color: '#00E0FF' }}>{t('hero.titleHighlight')}</span>
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.8, fontWeight: 400 }}>
                        {t('hero.subtitle')}
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Grid container spacing={4}>
                    {BENEFITS.map((item, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <Paper sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: '32px' }}>
                                <Avatar sx={{ width: 56, height: 56, mx: 'auto', mb: 2, bgcolor: 'rgba(0, 87, 255, 0.05)', color: '#0057FF' }}>{item.icon}</Avatar>
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ mt: 15 }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, textAlign: 'center', mb: 8 }}>{t('jobs.title')}</Typography>
                    <Stack spacing={3} sx={{ maxWidth: 800, mx: 'auto' }}>
                        {jobs.map(job => (
                            <Paper key={job.id} sx={{ p: 4, borderRadius: '40px', border: '1px solid #eee', transition: 'all 0.3s', '&:hover': { borderColor: '#0057FF', transform: 'translateX(10px)' } }}>
                                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ md: 'center' }} spacing={3}>
                                    <Box>
                                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{job.title}</Typography>
                                        <Stack direction="row" spacing={3}>
                                            <Stack direction="row" alignItems="center" spacing={1}><MapPin size={14} /> <Typography variant="caption" sx={{ fontWeight: 700 }}>{job.location}</Typography></Stack>
                                            <Stack direction="row" alignItems="center" spacing={1}><Clock size={14} /> <Typography variant="caption" sx={{ fontWeight: 700 }}>{job.type}</Typography></Stack>
                                            <Typography variant="caption" sx={{ fontWeight: 800, color: '#10B981' }}>{job.salary}</Typography>
                                        </Stack>
                                    </Box>
                                    <Button variant="contained" endIcon={<ArrowRight size={18} />} sx={{ height: 56, px: 4, bgcolor: '#0A1A3C', borderRadius: '16px' }}>{t('jobs.applyButton')}</Button>
                                </Stack>
                            </Paper>
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ mt: 15, textAlign: 'center', p: 8, bgcolor: 'rgba(0, 87, 255, 0.03)', borderRadius: '64px', border: '2px dashed rgba(0, 87, 255, 0.2)' }}>
                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>{t('noMatch.title')}</Typography>
                    <Typography color="text.secondary" sx={{ mb: 4 }}>{t('noMatch.desc')}</Typography>
                    <Button variant="contained" size="large" sx={{ height: 64, px: 6, bgcolor: '#0057FF' }}>{t('noMatch.submitButton')}</Button>
                </Box>
            </Container>
        </Box>
    );
};
export default Careers;

