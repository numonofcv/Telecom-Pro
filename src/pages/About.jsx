import React from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    Stack,
    Avatar,
    Divider
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    Award,
    Rocket,
    Heart,
    Globe,
    Briefcase,
    Target,
    Users,
    Shield
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation(['about', 'common']);
    return (
        <Box>
            <Box sx={{ bgcolor: '#0A1A3C', color: 'white', py: 15, textAlign: 'center' }}>
                <Container maxWidth="md">
                    <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '5rem' }, fontWeight: 900, mb: 4 }}>
                        {t('about:hero.title')} <span style={{ color: '#00E0FF' }}>{t('about:hero.titleHighlight')}</span>
                    </Typography>
                    <Typography variant="h6" sx={{ opacity: 0.7, fontWeight: 400 }}>
                        {t('about:hero.subtitle')}
                    </Typography>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -10, mb: 15 }}>
                <Grid container spacing={4}>
                    {[
                        { icon: <Target size={32} />, title: t('about:mission.m1.title'), text: t('about:mission.m1.text') },
                        { icon: <Users size={32} />, title: t('about:mission.m2.title'), text: t('about:mission.m2.text') },
                        { icon: <Shield size={32} />, title: t('about:mission.m3.title'), text: t('about:mission.m3.text') }
                    ].map((item, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Paper sx={{ p: 5, textAlign: 'center', height: '100%', borderRadius: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <Avatar sx={{ width: 64, height: 64, mx: 'auto', mb: 3, bgcolor: '#0057FF' }}>{item.icon}</Avatar>
                                <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>{item.title}</Typography>
                                <Typography color="text.secondary">{item.text}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="lg" sx={{ mb: 15 }}>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 6 }}>{t('about:history.title')}</Typography>
                        <Stack spacing={4}>
                            {t('about:history.timeline', { returnObjects: true }).map((t_item, i) => (
                                <Stack direction="row" spacing={3} key={i}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: '#0057FF' }} />
                                        {i < 3 && <Box sx={{ width: 2, flexGrow: 1, bgcolor: '#E2E8F0', my: 1 }} />}
                                    </Box>
                                    <Box sx={{ pb: 4 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 900, color: '#0057FF' }}>{t_item.year}</Typography>
                                        <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{t_item.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{t_item.desc}</Typography>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ position: 'relative' }}>
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                                alt="Office"
                                style={{ width: '100%', borderRadius: '48px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}
                            />
                            <Paper sx={{ position: 'absolute', bottom: -40, right: 40, p: 4, borderRadius: '24px', display: { xs: 'none', md: 'block' } }}>
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Award color="#F59E0B" size={40} />
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 900 }}>{t('about:history.isoTitle')}</Typography>
                                        <Typography variant="caption" sx={{ fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase' }}>{t('about:history.isoDesc')}</Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={{ bgcolor: '#0A1A3C', color: 'white', py: 15 }}>
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: 'center', mb: 10 }}>
                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>{t('about:team.title')} <span style={{ color: '#00E0FF' }}>{t('about:team.titleHighlight')}</span></Typography>
                        <Typography sx={{ opacity: 0.7 }}>{t('about:team.subtitle')}</Typography>
                    </Box>
                    <Grid container spacing={4}>
                        {t('about:team.members', { returnObjects: true }).map((member, i) => (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <Paper sx={{ p: 3, borderRadius: '32px', bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                                    <Avatar src={`https://i.pravatar.cc/300?u=${i}`} sx={{ width: 120, height: 120, mx: 'auto', mb: 3, border: '4px solid #00E0FF' }} />
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>{member.name}</Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.6 }}>{member.role}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 15 }}>
                <Grid container spacing={8} alignItems="center">
                    <Grid item xs={12} md={6} component={motion.div} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}>
                        <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                            <Globe size={400} color="#f1f5f9" strokeWidth={0.5} />
                            <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                <Typography variant="h4" sx={{ fontWeight: 900, color: '#0057FF' }}>Telecom Pro <br /> {t('common:common.ecosystem')}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>{t('about:ecosystem.title')} <span style={{ color: '#0057FF' }}>{t('about:ecosystem.titleHighlight')}</span></Typography>
                        <Typography color="text.secondary" sx={{ mb: 4 }}>{t('about:ecosystem.subtitle')}</Typography>
                        <Stack spacing={3}>
                            {t('about:ecosystem.features', { returnObjects: true }).map((val, i) => (
                                <Stack key={i} direction="row" spacing={3} alignItems="center">
                                    <Box sx={{ p: 1, bgcolor: 'rgba(0,87,255,0.05)', borderRadius: '12px', color: '#0057FF' }}>
                                        {i === 0 ? <Rocket size={20} /> : i === 1 ? <Heart size={20} /> : <Briefcase size={20} />}
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" sx={{ fontWeight: 800 }}>{val.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{val.text}</Typography>
                                    </Box>
                                </Stack>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
