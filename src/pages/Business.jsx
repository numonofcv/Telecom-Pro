import React from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    Paper,
    Button,
    TextField
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Briefcase,
    Globe,
    Shield,
    Cloud,
    ShieldCheck,
    Send
} from 'lucide-react';

export const Business = () => {
    const { t } = useTranslation(['business', 'common']);
    return (
        <Box>
            <Box
                sx={{
                    bgcolor: '#0F172A',
                    color: 'white',
                    pt: { xs: 15, md: 25 },
                    pb: { xs: 15, md: 25 },
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Box sx={{ position: 'absolute', inset: 0, opacity: 0.05, background: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={7} component={motion.div} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                            <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818CF8', px: 2, py: 1, borderRadius: '50px', mb: 4 }}>
                                <Briefcase size={18} />
                                <Typography variant="caption" sx={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2 }}>{t('hero.badge')}</Typography>
                            </Box>
                            <Typography variant="h1" sx={{ fontSize: { xs: '3.5rem', md: '5.5rem' }, fontWeight: 900, mb: 4, letterSpacing: '-3px', lineHeight: 1 }}>
                                {t('hero.title')} <br />{t('hero.titleHighlight')} <span style={{ background: 'linear-gradient(135deg, #6366F1, #A855F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{t('hero.titleEnd')}</span>
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: 0.5, mb: 6, fontWeight: 400, maxWidth: 550, lineHeight: 1.6 }}>
                                {t('hero.subtitle')}
                            </Typography>
                            <Stack direction="row" spacing={3}>
                                <Button variant="contained" size="large" sx={{ height: 72, px: 8, borderRadius: '24px' }}>{t('hero.consultButton')}</Button>
                                <Button variant="outlined" size="large" sx={{ height: 72, px: 6, color: 'white', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '24px', '&:hover': { borderColor: '#6366F1' } }}>{t('hero.solutionsButton')}</Button>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Box sx={{ position: 'relative', p: 4 }}>
                                <Box sx={{ position: 'absolute', inset: 0, bgcolor: '#6366F1', filter: 'blur(100px)', opacity: 0.1 }} />
                                <Paper className="glass" sx={{ p: 4, borderRadius: '40px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <Stack spacing={3}>
                                        {[
                                            { label: t('stats.sla'), value: '99.9%', color: '#10B981' },
                                            { label: t('stats.uptime'), value: '100%', color: '#6366F1' },
                                            { label: t('stats.response'), value: '< 5 min', color: '#A855F7' }
                                        ].map((stat, i) => (
                                            <Box key={i}>
                                                <Typography variant="caption" sx={{ opacity: 0.5, display: 'block', mb: 0.5 }}>{stat.label}</Typography>
                                                <Typography variant="h4" sx={{ fontWeight: 900, color: stat.color }}>{stat.value}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="lg" sx={{ py: 20 }}>
                <Typography variant="h3" sx={{ textAlign: 'center', fontWeight: 900, mb: 10, letterSpacing: '-2px' }}>{t('solutions.title')}</Typography>
                <Grid container spacing={4}>
                    {[
                        { icon: <Briefcase size={32} />, title: t('solutions.corporate.title'), desc: t('solutions.corporate.desc') },
                        { icon: <Globe size={32} />, title: t('solutions.vpn.title'), desc: t('solutions.vpn.desc') },
                        { icon: <Shield size={32} />, title: t('solutions.security.title'), desc: t('solutions.security.desc') },
                        { icon: <Cloud size={32} />, title: t('solutions.cloud.title'), desc: t('solutions.cloud.desc') }
                    ].map((solution, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <Paper
                                component={motion.div}
                                whileHover={{ y: -10 }}
                                sx={{
                                    p: 5,
                                    height: '100%',
                                    borderRadius: '40px',
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    background: i % 2 === 0 ? 'white' : 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        boxShadow: '0 30px 60px rgba(15,23,42,0.1)',
                                        borderColor: '#6366F1'
                                    }
                                }}
                            >
                                <Box sx={{ mb: 4, color: '#6366F1', bgcolor: 'rgba(99,102,241,0.05)', p: 2, borderRadius: '20px', display: 'inline-flex' }}>{solution.icon}</Box>
                                <Typography variant="h5" sx={{ fontWeight: 900, mb: 2 }}>{solution.title}</Typography>
                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{solution.desc}</Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Box sx={{ py: 10, bgcolor: '#f8fafc', overflow: 'hidden' }}>
                <Container maxWidth="lg">
                    <Typography variant="h6" sx={{ textAlign: 'center', mb: 6, opacity: 0.5, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>{t('partners.title')}</Typography>
                    <Grid container spacing={4} justifyContent="center" alignItems="center">
                        {['Samsung', 'Apple', 'Huawei', 'Cisco', 'Microsoft', 'Google'].map((partner, i) => (
                            <Grid item xs={4} md={2} key={i}>
                                <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 900, color: '#CBD5E1', '&:hover': { color: '#0057FF' }, transition: 'color 0.3s', cursor: 'pointer' }}>{partner}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Box sx={{ bgcolor: '#0A1A3C', color: 'white', py: 15 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6} component={motion.div} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
                            <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>{t('security.title')} <span style={{ color: '#00E0FF' }}>{t('security.titleHighlight')}</span></Typography>
                            <Stack spacing={4}>
                                {[
                                    { title: t('security.ddos.title'), desc: t('security.ddos.desc') },
                                    { title: t('security.audit.title'), desc: t('security.audit.desc') },
                                    { title: t('security.backup.title'), desc: t('security.backup.desc') }
                                ].map((item, i) => (
                                    <Stack key={i} direction="row" spacing={3}>
                                        <Box sx={{ p: 1, bgcolor: 'rgba(0,224,255,0.1)', borderRadius: '12px', color: '#00E0FF' }}><ShieldCheck /></Box>
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 800 }}>{item.title}</Typography>
                                            <Typography sx={{ opacity: 0.7 }}>{item.desc}</Typography>
                                        </Box>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6} component={motion.div} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}>
                            <Paper sx={{ p: 5, borderRadius: '48px', bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)' }}>
                                <Typography variant="h4" sx={{ fontWeight: 900, mb: 4, textAlign: 'center' }}>{t('business:cloud.title')} <span style={{ color: '#00E0FF' }}>{t('business:cloud.titleHighlight')}</span></Typography>
                                <Stack spacing={3}>
                                    {Object.values(t('business:cloud.plans', { returnObjects: true })).map((plan, i) => (
                                        <Box key={i} sx={{ p: 3, bgcolor: 'rgba(255,255,255,0.03)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)', '&:hover': { borderColor: '#00E0FF' } }}>
                                            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                                                <Typography variant="h6" sx={{ fontWeight: 800 }}>{plan.name}</Typography>
                                                <Typography sx={{ color: '#00E0FF', fontWeight: 800 }}>{plan.price}</Typography>
                                            </Stack>
                                            <Typography variant="caption" sx={{ opacity: 0.5 }}>{plan.specs}</Typography>
                                        </Box>
                                    ))}
                                    <Button variant="contained" fullWidth sx={{ py: 2, bgcolor: '#0057FF', borderRadius: '14px', fontWeight: 800 }}>{t('business:cloud.detailsButton')}</Button>
                                </Stack>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Container maxWidth="md" sx={{ py: 15 }}>
                <Paper sx={{ p: { xs: 4, md: 8 }, borderRadius: '48px', border: '1px solid #eee', boxShadow: '0 30px 60px rgba(0,0,0,0.05)' }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>{t('contact.title')}</Typography>
                        <Typography color="text.secondary">{t('contact.subtitle')}</Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label={t('contact.companyName')} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label={t('contact.phone')} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth label={t('contact.message')} multiline rows={4} variant="outlined" sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" size="large" endIcon={<Send />} sx={{ height: 64, bgcolor: '#0057FF', borderRadius: '16px', fontSize: '1.2rem', boxShadow: '0 20px 40px rgba(0,87,255,0.2)' }}>{t('contact.submitButton')}</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default Business;
