import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Dialog,
    DialogContent,
    Box,
    Typography,
    Stack,
    TextField,
    Button,
    IconButton,
    Avatar,
    Paper,
    CircularProgress
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    X,
    Truck,
    CheckCircle,
    ArrowRight,
    ShieldCheck,
    PhoneCall,
    Copy,
    Check
} from 'lucide-react';

export const SIMDeliveryForm = ({ selectedPlan, onClose }) => {
    const { t } = useTranslation(['forms', 'common']);
    const [step, setStep] = useState('entry');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '+998',
        address: '',
        passport: '',
    });

    const handleNext = (e) => {
        e.preventDefault();
        setStep('review');
    };

    const handleFinalSubmit = () => {
        setIsSubmitting(true);
        const id = `SIM-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
        setOrderId(id);
        setTimeout(() => {
            setIsSubmitting(false);
            setStep('success');
        }, 1500);
    };

    if (!selectedPlan) return null;

    return (
        <Dialog
            open={true}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{ sx: { borderRadius: '40px' } }}
        >
            <IconButton onClick={onClose} sx={{ position: 'absolute', top: 20, right: 20 }}><X /></IconButton>
            <DialogContent sx={{ p: { xs: 4, md: 8 } }}>
                {step !== 'success' && (
                    <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 6 }}>
                        <Avatar variant="rounded" sx={{ width: 64, height: 64, bgcolor: '#0057FF' }}><Truck size={32} /></Avatar>
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 900 }}>{t('forms:sim.title')}</Typography>
                            <Typography variant="caption" sx={{ opacity: 0.5 }}>{t('forms:sim.subtitle')}</Typography>
                        </Box>
                    </Stack>
                )}

                {step === 'entry' && (
                    <form onSubmit={handleNext}>
                        <Stack spacing={4}>
                            <TextField
                                fullWidth
                                label={t('forms:sim.fields.fullName')}
                                required
                                value={formData.fullName}
                                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                            />
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label={t('forms:sim.fields.phone')}
                                        required
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        label={t('forms:sim.fields.passport')}
                                        required
                                        value={formData.passport}
                                        onChange={e => setFormData({ ...formData, passport: e.target.value })}
                                    />
                                </Grid>
                            </Grid>
                            <TextField
                                fullWidth
                                multiline
                                rows={2}
                                label={t('forms:sim.fields.address')}
                                required
                                value={formData.address}
                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                            />
                            <Button fullWidth variant="contained" type="submit" endIcon={<ArrowRight />} sx={{ height: 60, bgcolor: '#0057FF' }}>{t('forms:sim.buttons.continue')}</Button>
                        </Stack>
                    </form>
                )}

                {step === 'review' && (
                    <Stack spacing={4}>
                        <Paper sx={{ p: 4, bgcolor: '#F8FAFC', border: '1px solid #eee' }}>
                            <Typography variant="caption" sx={{ fontWeight: 900, mb: 2, display: 'block' }}>{t('forms:sim.review.title')}</Typography>
                            <Stack spacing={2}>
                                <Stack direction="row" justifyContent="space-between"><Typography variant="body2">{t('forms:sim.review.tariff')}</Typography><Typography variant="body2" sx={{ fontWeight: 800 }}>{t(selectedPlan.name)}</Typography></Stack>
                                <Stack direction="row" justifyContent="space-between"><Typography variant="body2">{t('forms:sim.review.customer')}</Typography><Typography variant="body2" sx={{ fontWeight: 800 }}>{formData.fullName}</Typography></Stack>
                                <Stack direction="row" justifyContent="space-between"><Typography variant="body2">{t('forms:sim.review.phone')}</Typography><Typography variant="body2" sx={{ fontWeight: 800 }}>{formData.phone}</Typography></Stack>
                                <Stack direction="row" justifyContent="space-between"><Typography variant="body2">{t('forms:sim.review.passport')}</Typography><Typography variant="body2" sx={{ fontWeight: 800 }}>{formData.passport}</Typography></Stack>
                            </Stack>
                        </Paper>
                        <Stack direction="row" spacing={2}>
                            <Button fullWidth variant="outlined" onClick={() => setStep('entry')} sx={{ height: 60 }}>{t('forms:sim.buttons.edit')}</Button>
                            <Button fullWidth variant="contained" onClick={handleFinalSubmit} disabled={isSubmitting} startIcon={<ShieldCheck />} sx={{ height: 60, bgcolor: '#0057FF' }}>
                                {isSubmitting ? <CircularProgress size={24} color="inherit" /> : t('forms:sim.buttons.confirm')}
                            </Button>
                        </Stack>
                    </Stack>
                )}

                {step === 'success' && (
                    <Box sx={{ textAlign: 'center' }}>
                        <Avatar sx={{ width: 80, height: 80, bgcolor: '#4ADE80', mx: 'auto', mb: 3 }}><CheckCircle size={40} /></Avatar>
                        <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>{t('forms:sim.success.title')}</Typography>
                        <Typography color="text.secondary" sx={{ mb: 4 }}>{t('forms:sim.success.message')}</Typography>

                        <Paper sx={{ p: 4, bgcolor: 'rgba(0,87,255,0.05)', borderRadius: '24px', border: '2px dashed rgba(0,87,255,0.2)', mb: 4 }}>
                            <Typography variant="caption" sx={{ fontWeight: 900, color: '#0057FF', mb: 1, display: 'block' }}>{t('forms:sim.success.orderId')}</Typography>
                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                                <Typography variant="h5" sx={{ fontWeight: 900, color: '#0057FF' }}>{orderId}</Typography>
                                <IconButton onClick={() => { navigator.clipboard.writeText(orderId); setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
                                    {copied ? <Check size={18} /> : <Copy size={18} />}
                                </IconButton>
                            </Stack>
                        </Paper>

                        <Stack spacing={2} sx={{ mb: 4 }}>
                            <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, border: '1px solid #eee' }}>
                                <Avatar sx={{ bgcolor: '#0057FF' }}><PhoneCall size={18} /></Avatar>
                                <Box textAlign="left">
                                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{t('forms:sim.success.operatorTitle')}</Typography>
                                    <Typography variant="caption" sx={{ opacity: 0.5 }}>{t('forms:sim.success.operatorDesc')}</Typography>
                                </Box>
                            </Paper>
                            <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, border: '1px solid #eee' }}>
                                <Avatar sx={{ bgcolor: '#0057FF' }}><Truck size={18} /></Avatar>
                                <Box textAlign="left">
                                    <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{t('forms:sim.success.deliveryTitle')}</Typography>
                                    <Typography variant="caption" sx={{ opacity: 0.5 }}>{t('forms:sim.success.deliveryDesc')}</Typography>
                                </Box>
                            </Paper>
                        </Stack>

                        <Button fullWidth variant="contained" onClick={onClose} sx={{ height: 60, bgcolor: '#0A1A3C' }}>{t('common:buttons.close')}</Button>
                    </Box>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default SIMDeliveryForm;
