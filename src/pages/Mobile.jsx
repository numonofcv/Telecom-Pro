import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    Paper,
    Button,
    Divider,
    IconButton
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    Smartphone,
    Activity,
    ShieldCheck,
    Headphones,
    Smartphone as PhoneIcon,
    ChevronRight,
    Wifi,
    Music,
    Gamepad2,
    Radio,
    Cpu,
    Globe,
    Hash
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { MOBILE_PLANS } from '../constants';
import { TariffCard } from '../components/TariffCard';
import { SIMDeliveryForm } from '../components/SIMDeliveryForm';

export const Mobile = () => {
    const { t } = useTranslation('mobile');
    const [selectedPlan, setSelectedPlan] = useState(null);

    return (
        <Box>
            <Box sx={{ bgcolor: '#0F172A', color: 'white', pt: { xs: 8, md: 25 }, pb: { xs: 8, md: 25 }, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 70%)', filter: 'blur(100px)' }} />
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={7} component={motion.div} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818CF8', px: 2, py: 1, borderRadius: '50px', mb: 4 }}>
                                <Smartphone size={18} />
                                <Typography variant="caption" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2 }}>{t('hero.badge')}</Typography>
                            </Box>
                            <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '5rem' }, fontWeight: 900, mb: 4, letterSpacing: '-3px', lineHeight: 1 }}>
                                {t('hero.title')} <span style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('hero.titleHighlight')}</span> <br />{t('hero.titleEnd')}
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.5, mb: 6, fontWeight: 400, maxWidth: 500, lineHeight: 1.6 }}>
                                {t('hero.subtitle')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -10, mb: 12, position: 'relative', zIndex: 2 }}>
                <Grid container spacing={3}>
                    {[
                        { icon: <Activity size={32} />, title: t('benefits.speed.title'), desc: t('benefits.speed.desc') },
                        { icon: <ShieldCheck size={32} />, title: t('benefits.coverage.title'), desc: t('benefits.coverage.desc') },
                        { icon: <Headphones size={32} />, title: t('benefits.support.title'), desc: t('benefits.support.desc') }
                    ].map((benefit, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Paper
                                component={motion.div}
                                whileHover={{ y: -10 }}
                                sx={{ p: 4, borderRadius: '32px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', bgcolor: 'white' }}
                            >
                                <Box sx={{ color: '#0057FF', mb: 2, display: 'flex', justifyContent: 'center' }}>{benefit.icon}</Box>
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>{benefit.title}</Typography>
                                <Typography variant="body2" color="text.secondary">{benefit.desc}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="lg" sx={{ mb: 15 }}>
                <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 900, mb: 8 }}>{t('tariffs.title')}</Typography>
                <Grid container spacing={4} justifyContent="center">
                    {MOBILE_PLANS.map(plan => (
                        <Grid item xs={12} md={5} key={plan.id}>
                            <TariffCard tariff={plan} onSelect={(p) => setSelectedPlan(p)} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ bgcolor: '#F8FAFC', py: 15 }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 900, mb: 8 }}>{t('additionalServices.title')}</Typography>
                    <Grid container spacing={3}>
                        {[
                            { icon: <Cpu />, title: t('additionalServices.esim.title'), desc: t('additionalServices.esim.desc'), price: t('additionalServices.esim.price') },
                            { icon: <Globe />, title: t('additionalServices.roaming.title'), desc: t('additionalServices.roaming.desc'), price: t('additionalServices.roaming.price') },
                            { icon: <Hash />, title: t('additionalServices.beautifulNumber.title'), desc: t('additionalServices.beautifulNumber.desc'), price: t('additionalServices.beautifulNumber.price') },
                            { icon: <PhoneIcon />, title: t('additionalServices.simRecovery.title'), desc: t('additionalServices.simRecovery.desc'), price: t('additionalServices.simRecovery.price') }
                        ].map((service, i) => (
                            <Grid item xs={12} sm={6} md={3} key={i}>
                                <Paper
                                    component={motion.div}
                                    whileHover={{ y: -5 }}
                                    sx={{ p: 3, borderRadius: '24px', height: '100%', display: 'flex', flexDirection: 'column', gap: 2, border: '1px solid #eee', '&:hover': { borderColor: '#0057FF' } }}
                                >
                                    <Box sx={{ color: '#0057FF', bgcolor: 'rgba(0,87,255,0.05)', p: 1.5, borderRadius: '12px', alignSelf: 'flex-start' }}>{service.icon}</Box>
                                    <Typography variant="h6" sx={{ fontWeight: 800 }}>{service.title}</Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>{service.desc}</Typography>
                                    <Divider sx={{ my: 1 }} />
                                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                                        <Typography sx={{ fontWeight: 700, color: '#0057FF' }}>{service.price}</Typography>
                                        <IconButton size="small" sx={{ color: '#0057FF' }}><ChevronRight /></IconButton>
                                    </Stack>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ bgcolor: '#F8FAFC', py: 15 }}>
                <Container maxWidth="lg">
                    <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 900, mb: 2, letterSpacing: '-2px' }}>{t('entertainment.title')}</Typography>
                    <Typography variant="body1" sx={{ textAlign: 'center', opacity: 0.5, mb: 10, maxWidth: 600, mx: 'auto' }}>{t('entertainment.subtitle')}</Typography>
                    <Grid container spacing={4}>
                        {[
                            { icon: <Music size={32} />, title: t('entertainment.music.title'), desc: t('entertainment.music.desc'), price: t('entertainment.music.price'), color: '#6366F1' },
                            { icon: <Gamepad2 size={32} />, title: t('entertainment.gaming.title'), desc: t('entertainment.gaming.desc'), price: t('entertainment.gaming.price'), color: '#A855F7' },
                            { icon: <Radio size={32} />, title: t('entertainment.radio.title'), desc: t('entertainment.radio.desc'), price: t('entertainment.radio.price'), color: '#F59E0B' }
                        ].map((item, i) => (
                            <Grid item xs={12} md={4} key={i}>
                                <Paper
                                    component={motion.div}
                                    whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(15,23,42,0.1)' }}
                                    sx={{ p: 5, borderRadius: '40px', border: '1px solid rgba(226, 232, 240, 0.5)', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                                >
                                    <Box>
                                        <Box sx={{ mb: 4, color: item.color, display: 'flex', justifyContent: 'center', bgcolor: `${item.color}10`, width: 64, height: 64, alignItems: 'center', borderRadius: '20px' }}>{item.icon}</Box>
                                        <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5 }}>{item.title}</Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}>{item.desc}</Typography>
                                    </Box>
                                    <Box>
                                        <Divider sx={{ mb: 3, opacity: 0.5 }} />
                                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                                            <Typography sx={{ fontWeight: 900, fontSize: '1.1rem' }}>{item.price}</Typography>
                                            <Button variant="text" sx={{ fontWeight: 800, color: item.color, '&:hover': { bgcolor: `${item.color}05` } }}>{t('entertainment.activateButton')}</Button>
                                        </Stack>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {selectedPlan && <SIMDeliveryForm selectedPlan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
        </Box>
    );
};

export default Mobile;
