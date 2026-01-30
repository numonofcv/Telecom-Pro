import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    Paper,
    Button,
    Divider
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    Zap,
    Shield,
    Monitor,
    Headphones,
    Check,
    Gauge,
    Activity,
    Search,
    Wifi,
    Globe
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { INTERNET_PLANS } from '../constants';
import { TariffCard } from '../components/TariffCard';
import { FiberOrderForm } from '../components/FiberOrderForm';

export const Internet = () => {
    const { t } = useTranslation(['internet', 'common']);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const benefits = [
        { icon: <Zap size={24} />, title: t('internet:whyUs.benefits.symmetric.title'), desc: t('internet:whyUs.benefits.symmetric.desc') },
        { icon: <Shield size={24} />, title: t('internet:whyUs.benefits.security.title'), desc: t('internet:whyUs.benefits.security.desc') },
        { icon: <Monitor size={24} />, title: t('internet:whyUs.benefits.freeTv.title'), desc: t('internet:whyUs.benefits.freeTv.desc') },
        { icon: <Headphones size={24} />, title: t('internet:whyUs.benefits.experts.title'), desc: t('internet:whyUs.benefits.experts.desc') }
    ];

    return (
        <Box>
            <Box sx={{ bgcolor: '#0F172A', color: 'white', pt: { xs: 8, md: 25 }, pb: { xs: 8, md: 25 }, position: 'relative', overflow: 'hidden' }}>
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={7} component={motion.div} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818CF8', px: 2, py: 1, borderRadius: '50px', mb: 4 }}>
                                <Zap size={18} />
                                <Typography variant="caption" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2 }}>{t('internet:hero.badge')}</Typography>
                            </Box>
                            <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '5.5rem' }, fontWeight: 900, mb: 4, letterSpacing: '-4px', lineHeight: 0.9 }}>
                                {t('internet:hero.title')} <span style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('internet:hero.titleHighlight')}</span> <br />{t('internet:hero.titleEnd')}
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.5, mb: 6, fontWeight: 400, maxWidth: 550, lineHeight: 1.6 }}>
                                {t('internet:hero.subtitle')}
                            </Typography>
                            <Stack direction="row" spacing={3}>
                                <Button variant="contained" size="large" sx={{ height: 72, px: 8, borderRadius: '24px' }}>{t('internet:hero.connectButton')}</Button>
                                <Button variant="outlined" size="large" sx={{ height: 72, px: 6, color: 'white', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '24px', '&:hover': { borderColor: '#6366F1' } }}>{t('internet:hero.coverageButton')}</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
                                    <Box sx={{ width: 450, height: 450, borderRadius: '50%', border: '1px dashed rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Box sx={{ width: 350, height: 350, borderRadius: '50%', border: '1px dashed rgba(168,85,247,0.2)' }} />
                                    </Box>
                                </motion.div>
                                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                                    <Typography variant="h1" sx={{ fontWeight: 900, color: 'white', letterSpacing: -2 }}>{t('internet:hero.speedValue')}</Typography>
                                    <Typography sx={{ fontWeight: 900, color: '#6366F1', letterSpacing: 2 }}>{t('internet:hero.speedUnit')}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Box sx={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, bgcolor: '#6366F1', filter: 'blur(150px)', opacity: 0.1 }} />
            </Box>

            <Container maxWidth="md" sx={{ mt: -10, mb: 15, position: 'relative', zIndex: 10 }}>
                <Paper sx={{ p: { xs: 6, md: 10 }, borderRadius: '64px', textAlign: 'center', bgcolor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(20px)' }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, letterSpacing: '-1.5px' }}>{t('internet:speedIntelligence.title')}</Typography>
                    <Box sx={{ position: 'relative', my: 8, display: 'inline-block' }}>
                        <Gauge size={140} color="#6366F1" strokeWidth={1} />
                        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -10%)', textAlign: 'center' }}>
                            <Typography variant="h3" sx={{ fontWeight: 900, color: '#0F172A' }}>{t('internet:speedIntelligence.value')}</Typography>
                            <Typography variant="caption" sx={{ display: 'block', fontWeight: 800, color: '#6366F1' }}>{t('internet:speedIntelligence.unit')}</Typography>
                        </Box>
                    </Box>
                    <Typography color="text.secondary" sx={{ mb: 6, maxWidth: 500, mx: 'auto', fontSize: '1.1rem', lineHeight: 1.7 }}>
                        {t('internet:speedIntelligence.desc')}
                    </Typography>
                    <Button variant="contained" size="large" startIcon={<Activity />} sx={{ borderRadius: '24px', px: 8, py: 2.5, fontSize: '1.1rem' }}>{t('internet:speedIntelligence.testButton')}</Button>
                </Paper>
            </Container>

            <Container maxWidth="lg" sx={{ mb: 15 }}>
                <Grid container spacing={4}>
                    {INTERNET_PLANS.map(plan => (
                        <Grid item xs={12} md={4} key={plan.id}>
                            <TariffCard tariff={plan} onSelect={(p) => setSelectedPlan(p)} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="lg" sx={{ mb: 15 }}>
                <Typography variant="h4" sx={{ fontWeight: 900, textAlign: 'center', mb: 8 }}>{t('internet:whyUs.title')}</Typography>
                <Grid container spacing={4}>
                    {benefits.map((b, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <Paper sx={{ p: 4, textAlign: 'center', height: '100%', borderRadius: '32px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                                <Box sx={{ mb: 2, color: '#0057FF', display: 'flex', justifyContent: 'center' }}>{b.icon}</Box>
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{b.title}</Typography>
                                <Typography variant="body2" color="text.secondary">{b.desc}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ bgcolor: '#F8FAFC', py: 20 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={10} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#4F46E5', py: 1, px: 2, borderRadius: '50px', display: 'inline-block', mb: 3 }}>
                                <Typography variant="caption" sx={{ fontWeight: 900 }}>{t('internet:gpon.badge')}</Typography>
                            </Box>
                            <Typography variant="h2" sx={{ fontWeight: 900, mb: 4, letterSpacing: '-2px' }}>{t('internet:gpon.title')} <span style={{ color: '#6366F1' }}>{t('internet:gpon.titleHighlight')}</span></Typography>
                            <Stack spacing={4}>
                                {t('internet:gpon.features', { returnObjects: true }).map((item, i) => (
                                    <Stack key={i} direction="row" spacing={3} alignItems="flex-start">
                                        <Box sx={{ p: 2, bgcolor: 'white', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '20px', color: '#6366F1', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}><Check size={22} /></Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 900, mb: 0.5 }}>{item.title}</Typography>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{item.desc}</Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative', borderRadius: '64px', overflow: 'hidden', boxShadow: '0 50px 100px rgba(0,0,0,0.1)' }}>
                                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000" alt="GPON" style={{ width: '100%', display: 'block' }} />
                                <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,23,42,0.6), transparent)' }} />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 15 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>{t('internet:coverage.title')} <span style={{ color: '#0057FF' }}>{t('internet:coverage.titleHighlight')}</span></Typography>
                    <Typography color="text.secondary">{t('internet:coverage.subtitle')}</Typography>
                </Box>
                <Paper sx={{ p: 2, borderRadius: '48px', bgcolor: '#0A1A3C', overflow: 'hidden', position: 'relative' }}>
                    <Box sx={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', minHeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Globe size={300} color="rgba(0,224,255,0.1)" strokeWidth={0.5} />
                        <Box sx={{ position: 'absolute', textAlign: 'center' }}>
                            <Wifi size={64} color="#00E0FF" style={{ marginBottom: 16 }} />
                            <Typography variant="h4" sx={{ color: 'white', fontWeight: 900 }}>{t('internet:coverage.nationwide')}</Typography>
                        </Box>
                        {[
                            { t: '20%', l: '30%' }, { t: '40%', l: '60%' }, { t: '70%', l: '40%' }, { t: '30%', l: '80%' }
                        ].map((pos, i) => (
                            <Box
                                key={i}
                                component={motion.div}
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                sx={{
                                    position: 'absolute',
                                    top: pos.t,
                                    left: pos.l,
                                    width: 12,
                                    height: 12,
                                    bgcolor: '#00E0FF',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 20px #00E0FF'
                                }}
                            />
                        ))}
                    </Box>
                    <Box sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)', color: 'white', textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>{t('internet:coverage.checkTitle')}</Typography>
                        <Typography sx={{ opacity: 0.7, mb: 3 }}>{t('internet:coverage.checkDesc')}</Typography>
                        <Stack direction="row" spacing={2} justifyContent="center" sx={{ maxWidth: 500, mx: 'auto' }}>
                            <Box sx={{ flexGrow: 1, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', px: 2 }}>
                                <Search size={20} color="rgba(255,255,255,0.5)" />
                                <Box component="input" placeholder={t('internet:coverage.placeholder')} sx={{ bgcolor: 'transparent', border: 'none', color: 'white', ml: 1, width: '100%', outline: 'none', py: 1.5 }} />
                            </Box>
                            <Button variant="contained" sx={{ bgcolor: '#0057FF', borderRadius: '12px', px: 4 }}>{t('internet:coverage.checkButton')}</Button>
                        </Stack>
                    </Box>
                </Paper>
            </Container>

            {selectedPlan && <FiberOrderForm plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
        </Box>
    );
};

export default Internet;
