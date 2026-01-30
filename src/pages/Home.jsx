import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Paper,
    Divider,
    useTheme,
    useMediaQuery
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    Zap,
    Globe,
    ChevronRight,
    Star,
    ShieldCheck,
    Check,
    Clock,
    Users,
    Map,
    Headphones,
    ChevronDown,
    Play,
    Gift,
    Heart
} from 'lucide-react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import { TariffCard } from '../components/TariffCard';
import { INTERNET_PLANS } from '../constants';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const { t } = useTranslation(['home', 'common']);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    const features = [
        { icon: <Zap size={24} color="#0057FF" />, title: t('home:features.fast.title'), desc: t('home:features.fast.desc') },
        { icon: <Globe size={24} color="#0057FF" />, title: t('home:features.convenient.title'), desc: t('home:features.convenient.desc') },
        { icon: <ShieldCheck size={24} color="#0057FF" />, title: t('home:features.secure.title'), desc: t('home:features.secure.desc') },
        { icon: <Clock size={24} color="#0057FF" />, title: t('home:features.support.title'), desc: t('home:features.support.desc') },
    ];

    const statsData = [
        { icon: <Users size={32} />, value: '2.5M+', label: t('home:stats.users'), color: '#6366F1' },
        { icon: <Map size={32} />, value: '98%', label: t('home:stats.coverage'), color: '#A855F7' },
        { icon: <ShieldCheck size={32} />, value: '99.9%', label: t('home:stats.reliability'), color: '#10B981' },
        { icon: <Headphones size={32} />, value: '24/7', label: t('home:stats.support'), color: '#F59E0B' }
    ];

    const comboPlans = [
        { title: t('home:combo.lite.title'), price: '120 000', services: [t('home:combo.lite.service1'), t('home:combo.lite.service2'), t('home:combo.lite.service3')], color: '#8B5CF6' },
        { title: t('home:combo.ultra.title'), price: '250 000', services: [t('home:combo.ultra.service1'), t('home:combo.ultra.service2'), t('home:combo.ultra.service3')], color: '#6366F1', popular: true },
        { title: t('home:combo.family.title'), price: '400 000', services: [t('home:combo.family.service1'), t('home:combo.family.service2'), t('home:combo.family.service3')], color: '#0F172A' }
    ];

    const faqItems = [
        { q: t('home:faq.q1.question'), a: t('home:faq.q1.answer') },
        { q: t('home:faq.q2.question'), a: t('home:faq.q2.answer') },
        { q: t('home:faq.q3.question'), a: t('home:faq.q3.answer') },
        { q: t('home:faq.q4.question'), a: t('home:faq.q4.answer') }
    ];

    return (
        <Box>
            <Box
                sx={{
                    bgcolor: '#0F172A',
                    color: 'white',
                    pt: { xs: 8, md: 25 },
                    pb: { xs: 8, md: 25 },
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: '-20%',
                        right: '-10%',
                        width: '60%',
                        height: '80%',
                        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
                        filter: 'blur(80px)',
                    }
                }}
            >
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={7} component={motion.div} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818CF8', px: 2.5, py: 1, borderRadius: '50px', mb: 4 }}>
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}>
                                    <Star size={16} fill="#818CF8" />
                                </motion.div>
                                <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2 }}>
                                    {t('home:hero.badge')}
                                </Typography>
                            </Box>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '3rem', md: '5.5rem' },
                                    fontWeight: 900,
                                    lineHeight: 0.95,
                                    mb: 4,
                                    letterSpacing: '-3px'
                                }}
                            >
                                {t('home:hero.title')} <br />
                                <span style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('home:hero.titleHighlight')}</span> {t('home:hero.titleEnd')}
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.5, mb: 6, fontWeight: 400, maxWidth: 550, lineHeight: 1.6 }}>
                                {t('home:hero.subtitle')}
                            </Typography>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => navigate('/mobile')}
                                    sx={{
                                        height: 72,
                                        px: 8,
                                        fontSize: '1.2rem',
                                        borderRadius: '24px'
                                    }}
                                >
                                    {t('home:hero.startButton')}
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={() => navigate('/internet')}
                                    sx={{
                                        color: 'white',
                                        borderColor: 'rgba(255,255,255,0.1)',
                                        height: 72,
                                        px: 6,
                                        fontSize: '1.1rem',
                                        borderRadius: '24px',
                                        backdropFilter: 'blur(10px)',
                                        '&:hover': { borderColor: '#6366F1', bgcolor: 'rgba(99, 102, 241, 0.05)' }
                                    }}
                                >
                                    {t('home:hero.servicesButton')}
                                </Button>
                            </Stack>
                        </Grid>
                        {!isMobile && (
                            <Grid item xs={12} md={5}>
                                <Box sx={{ position: 'relative' }}>
                                    <motion.div
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        <Paper className="glass" sx={{ p: 5, borderRadius: '48px', position: 'relative', overflow: 'hidden' }}>
                                            <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', bgcolor: '#6366F1' }} />
                                            <Typography variant="h5" sx={{ mb: 4 }}>{t('home:liveStatus.title')}</Typography>
                                            <Stack spacing={4}>
                                                {[
                                                    { label: t('home:liveStatus.latency'), value: '2ms', color: '#10B981', progress: 98 },
                                                    { label: t('home:liveStatus.uptime'), value: '99.99%', color: '#6366F1', progress: 99 },
                                                    { label: t('home:liveStatus.throughput'), value: '40Gbps', color: '#A855F7', progress: 85 }
                                                ].map((stat, i) => (
                                                    <Box key={i}>
                                                        <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                                                            <Typography variant="caption" sx={{ opacity: 0.6 }}>{stat.label}</Typography>
                                                            <Typography variant="caption" sx={{ fontWeight: 800, color: stat.color }}>{stat.value}</Typography>
                                                        </Stack>
                                                        <Box sx={{ height: 6, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 3, overflow: 'hidden' }}>
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${stat.progress}%` }}
                                                                transition={{ duration: 2, delay: i * 0.2 }}
                                                                style={{ height: '100%', backgroundColor: stat.color }}
                                                            />
                                                        </Box>
                                                    </Box>
                                                ))}
                                            </Stack>
                                        </Paper>
                                    </motion.div>
                                    <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, bgcolor: '#A855F7', filter: 'blur(120px)', opacity: 0.2, zIndex: -1 }} />
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ mt: -10, mb: 12, position: 'relative', zIndex: 10 }}>
                <Grid container spacing={4}>
                    {features.map((f, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <Paper
                                component={motion.div}
                                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.1)' }}
                                sx={{
                                    p: 5,
                                    borderRadius: '32px',
                                    textAlign: 'center',
                                    border: '1px solid rgba(226, 232, 240, 0.5)',
                                }}
                            >
                                <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center', color: '#6366F1' }}>{f.icon}</Box>
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.5 }}>{f.title}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{f.desc}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ overflow: 'hidden', py: 8, bgcolor: '#f8fafc' }}>
                <Container maxWidth="lg">
                    <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, opacity: 0.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>{t('home:partners.title')}</Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ opacity: 0.6, filter: 'grayscale(100%)', px: { xs: 2, md: 10 } }}>
                        {['Samsung', 'Apple', 'Huawei', 'Nokia', 'Cisco'].map((brand, i) => (
                            <Typography key={i} variant="h4" sx={{ fontWeight: 900, color: '#94a3b8' }}>{brand}</Typography>
                        ))}
                    </Stack>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ my: 20 }}>
                <Grid container spacing={4}>
                    {statsData.map((stat, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <Box sx={{ textAlign: 'center' }}>
                                <Box sx={{ color: stat.color, mb: 2.5, display: 'flex', justifyContent: 'center' }}>{stat.icon}</Box>
                                <Typography variant="h2" sx={{ fontWeight: 900, mb: 1 }}>{stat.value}</Typography>
                                <Typography color="text.secondary" sx={{ fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, fontSize: '0.75rem' }}>{stat.label}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="lg" sx={{ mb: 15 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-end" sx={{ mb: 8 }}>
                    <Box>
                        <Typography variant="overline" sx={{ color: '#6366F1', fontWeight: 900, letterSpacing: 2 }}>{t('home:internet.badge')}</Typography>
                        <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: '-2px' }}>{t('home:internet.title')}</Typography>
                    </Box>
                    {!isMobile && (
                        <Button variant="text" onClick={() => navigate('/internet')} sx={{ color: '#0057FF' }} endIcon={<ChevronRight size={18} />}>
                            {t('home:internet.viewAll')}
                        </Button>
                    )}
                </Stack>
                <Grid container spacing={4}>
                    {INTERNET_PLANS.slice(0, 3).map(plan => (
                        <Grid item xs={12} md={4} key={plan.id}>
                            <TariffCard tariff={plan} onSelect={() => navigate('/internet')} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container maxWidth="lg" sx={{ py: 15 }}>
                <Box sx={{ textAlign: 'center', mb: 10 }}>
                    <Typography variant="overline" sx={{ color: '#0057FF', fontWeight: 800 }}>{t('home:combo.badge')}</Typography>
                    <Typography variant="h3" sx={{ fontWeight: 900 }}>{t('home:combo.title')} <span style={{ color: '#0057FF' }}>{t('home:combo.titleHighlight')}</span></Typography>
                </Box>
                <Grid container spacing={4}>
                    {comboPlans.map((item, i) => (
                        <Grid item xs={12} md={4} key={i}>
                            <Paper
                                component={motion.div}
                                whileHover={{ y: -10 }}
                                sx={{
                                    p: 5,
                                    borderRadius: '40px',
                                    border: item.popular ? '2px solid #6366F1' : '1px solid rgba(226, 232, 240, 0.5)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    bgcolor: item.popular ? 'rgba(99, 102, 241, 0.02)' : 'white'
                                }}
                            >
                                {item.popular && (
                                    <Box sx={{ position: 'absolute', top: 20, right: -40, bgcolor: '#6366F1', color: 'white', px: 6, py: 1, transform: 'rotate(45deg)', fontWeight: 800, fontSize: '0.75rem' }}>{t('common:common.popular').toUpperCase()}</Box>
                                )}
                                <Typography variant="h5" sx={{ fontWeight: 900, mb: 3 }}>{item.title}</Typography>
                                <Stack spacing={2} sx={{ mb: 4 }}>
                                    {item.services.map((s, idx) => (
                                        <Stack key={idx} direction="row" spacing={2} alignItems="center">
                                            <Box sx={{ color: '#6366F1' }}><Check size={18} /></Box>
                                            <Typography variant="body2" sx={{ fontWeight: 600, opacity: 0.8 }}>{s}</Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                                <Divider sx={{ mb: 3, opacity: 0.5 }} />
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="h4" sx={{ fontWeight: 900, color: '#0F172A' }}>{item.price} <span style={{ fontSize: '1rem', fontWeight: 400, opacity: 0.5 }}>{t('common:common.perMonth')}</span></Typography>
                                </Box>
                                <Button variant={item.popular ? "contained" : "outlined"} fullWidth sx={{ py: 2, borderRadius: '16px', fontWeight: 800 }}>{t('home:combo.connectButton')}</Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ bgcolor: '#0F172A', color: 'white', py: 20, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', bottom: -100, left: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', filter: 'blur(50px)' }} />
                <Container maxWidth="lg">
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                <motion.div
                                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                                    transition={{ duration: 6, repeat: Infinity }}
                                >
                                    <Gift size={220} color="#A855F7" strokeWidth={1} style={{ opacity: 0.3 }} />
                                </motion.div>
                                <Paper className="glass" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', p: 4, borderRadius: '32px', textAlign: 'center', minWidth: 200 }}>
                                    <Typography variant="h3" sx={{ fontWeight: 900, color: '#6366F1' }}>+15%</Typography>
                                    <Typography variant="caption" sx={{ fontWeight: 800, textTransform: 'uppercase', opacity: 0.6 }}>{t('home:loyalty.cashback')}</Typography>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" sx={{ fontWeight: 900, mb: 4, letterSpacing: '-2px' }}>{t('home:loyalty.title')} <br /><span style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('home:loyalty.titleHighlight')}</span></Typography>
                            <Typography sx={{ opacity: 0.5, mb: 6, fontSize: '1.2rem', lineHeight: 1.6 }}>
                                {t('home:loyalty.subtitle')}
                            </Typography>
                            <Grid container spacing={3}>
                                {[
                                    { icon: <Heart color="#EF4444" />, title: t('home:loyalty.proPoints.title'), text: t('home:loyalty.proPoints.desc') },
                                    { icon: <Star color="#F59E0B" />, title: t('home:loyalty.vipStatus.title'), text: t('home:loyalty.vipStatus.desc') }
                                ].map((benefit, i) => (
                                    <Grid item xs={6} key={i}>
                                        <Box sx={{ p: 4, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <Box sx={{ mb: 2 }}>{benefit.icon}</Box>
                                            <Typography variant="h6" sx={{ fontWeight: 800 }}>{benefit.title}</Typography>
                                            <Typography variant="caption" sx={{ opacity: 0.4 }}>{benefit.text}</Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ bgcolor: '#F8FAFC', py: 20 }}>
                <Container maxWidth="lg">
                    <Paper className="glass" sx={{ p: { xs: 6, md: 10 }, borderRadius: '64px', overflow: 'hidden', position: 'relative' }}>
                        <Grid container spacing={8} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Box sx={{ bgcolor: 'rgba(99, 102, 241, 0.1)', color: '#4F46E5', py: 1, px: 2, borderRadius: '50px', display: 'inline-block', mb: 3 }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 900 }}>{t('home:mobileApp.badge')}</Typography>
                                </Box>
                                <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, letterSpacing: '-2px' }}>{t('home:mobileApp.title')} <span style={{ color: '#6366F1' }}>{t('home:mobileApp.titleHighlight')}</span></Typography>
                                <Typography sx={{ opacity: 0.6, mb: 6, fontSize: '1.1rem', lineHeight: 1.7 }}>
                                    {t('home:mobileApp.subtitle')}
                                </Typography>
                                <Stack direction="row" spacing={3}>
                                    <Button variant="contained" sx={{ bgcolor: '#0F172A', color: 'white', borderRadius: '20px', '&:hover': { bgcolor: '#1e293b' } }}>{t('home:mobileApp.googlePlay')}</Button>
                                    <Button variant="outlined" sx={{ borderColor: 'rgba(15,23,42,0.1)', color: '#0F172A', borderRadius: '20px' }}>{t('home:mobileApp.appStore')}</Button>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box sx={{ width: 280, height: 560, bgcolor: '#0F172A', borderRadius: '48px', p: 2, boxShadow: '0 50px 100px rgba(15,23,42,0.2)' }}>
                                        <Box sx={{ width: '100%', height: '100%', bgcolor: '#6366F1', borderRadius: '36px', overflow: 'hidden', p: 4, pt: 8 }}>
                                            <Typography variant="h5" sx={{ fontWeight: 900, color: 'white', mb: 4 }}>{t('home:mobileApp.greeting')}</Typography>
                                            <Paper sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.15)', borderRadius: '24px', backdropFilter: 'blur(10px)', border: 'none' }}>
                                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.7)' }}>{t('home:mobileApp.balance')}</Typography>
                                                <Typography variant="h4" sx={{ fontWeight: 900, color: 'white' }}>78.5k</Typography>
                                            </Paper>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>

            <Container maxWidth="md" sx={{ py: 15 }}>
                <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 900, mb: 8 }}>{t('home:faq.title')}</Typography>
                {faqItems.map((item, i) => (
                    <Accordion key={i} elevation={0} sx={{ mb: 2, borderRadius: '16px !important', border: '1px solid #eee', '&:before': { display: 'none' } }}>
                        <AccordionSummary expandIcon={<ChevronDown />}>
                            <Typography sx={{ fontWeight: 700, fontSize: '1.1rem' }}>{item.q}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">{item.a}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Container>
        </Box>
    );
};

export default Home;
