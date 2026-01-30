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
    Divider,
    CircularProgress,
    Paper
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    X,
    Wifi,
    User,
    Phone,
    MapPin,
    Building2,
    CheckCircle,
    Info,
    ArrowRight
} from 'lucide-react';

export const FiberOrderForm = ({ plan, onClose }) => {
    const { t } = useTranslation(['forms', 'common']);
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '+998',
        address: '',
        buildingType: 'apartment',
        preferredDate: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setStep(3);
        }, 1500);
    };

    if (!plan) return null;

    return (
        <Dialog
            open={true}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            PaperProps={{ sx: { borderRadius: '40px', overflow: 'hidden' } }}
        >
            <IconButton onClick={onClose} sx={{ position: 'absolute', top: 20, right: 20, zIndex: 10 }}><X /></IconButton>
            <DialogContent sx={{ p: 0 }}>
                <Grid container>
                    <Grid item xs={12} md={4} sx={{ bgcolor: '#F8FAFC', p: 5, borderRight: '1px solid #eee' }}>
                        <Avatar variant="rounded" sx={{ width: 56, height: 56, bgcolor: '#0057FF', mb: 3 }}><Wifi /></Avatar>
                        <Typography variant="h5" sx={{ fontWeight: 900, mb: 1 }}>{t('forms:fiber.title')}</Typography>
                        <Typography variant="caption" sx={{ color: '#94A3B8', fontWeight: 700 }}>{t('forms:fiber.selectedTariff')}</Typography>
                        <Paper sx={{ p: 3, mt: 2, border: '1px solid rgba(0,87,255,0.1)', boxShadow: '0 10px 20px rgba(0,0,0,0.02)' }}>
                            <Typography variant="h6" sx={{ color: '#0057FF', fontWeight: 900 }}>{t(plan.name)}</Typography>
                            <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.5 }}>{plan.speed} {t('forms:fiber.speed')}</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 900 }}>{plan.price.toLocaleString()} {t('forms:fiber.pricePerMonth')}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={8} sx={{ p: { xs: 4, md: 8 } }}>
                        {step === 1 && (
                            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
                                <Typography variant="h4" sx={{ fontWeight: 900, mb: 4 }}>{t('forms:fiber.steps.contact')}</Typography>
                                <Stack spacing={3}>
                                    <TextField
                                        fullWidth
                                        label={t('forms:fiber.fields.name')}
                                        required
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        InputProps={{ startAdornment: <User size={18} style={{ marginRight: 12, opacity: 0.4 }} /> }}
                                    />
                                    <TextField
                                        fullWidth
                                        label={t('forms:fiber.fields.phone')}
                                        required
                                        value={formData.phone}
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                        InputProps={{ startAdornment: <Phone size={18} style={{ marginRight: 12, opacity: 0.4 }} /> }}
                                    />
                                    <Button fullWidth variant="contained" type="submit" endIcon={<ArrowRight />} sx={{ height: 60, bgcolor: '#0A1A3C' }}>{t('forms:fiber.buttons.next')}</Button>
                                </Stack>
                            </form>
                        )}
                        {step === 2 && (
                            <form onSubmit={handleSubmit}>
                                <Typography variant="h4" sx={{ fontWeight: 900, mb: 4 }}>{t('forms:fiber.steps.address')}</Typography>
                                <Stack spacing={3}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Button
                                                fullWidth
                                                variant={formData.buildingType === 'apartment' ? 'contained' : 'outlined'}
                                                onClick={() => setFormData({ ...formData, buildingType: 'apartment' })}
                                                startIcon={<Building2 size={18} />}
                                                sx={{ height: 56 }}
                                            >
                                                {t('forms:fiber.fields.buildingType.apartment')}
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                fullWidth
                                                variant={formData.buildingType === 'house' ? 'contained' : 'outlined'}
                                                onClick={() => setFormData({ ...formData, buildingType: 'house' })}
                                                startIcon={<MapPin size={18} />}
                                                sx={{ height: 56 }}
                                            >
                                                {t('forms:fiber.fields.buildingType.house')}
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={2}
                                        label={t('forms:fiber.fields.address')}
                                        required
                                        value={formData.address}
                                        onChange={e => setFormData({ ...formData, address: e.target.value })}
                                    />
                                    <TextField
                                        fullWidth
                                        type="date"
                                        label={t('forms:fiber.fields.date')}
                                        InputLabelProps={{ shrink: true }}
                                        required
                                        value={formData.preferredDate}
                                        onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                                    />
                                    <Stack direction="row" spacing={2}>
                                        <Button fullWidth variant="outlined" onClick={() => setStep(1)} sx={{ height: 60 }}>{t('forms:fiber.buttons.back')}</Button>
                                        <Button fullWidth variant="contained" type="submit" disabled={isSubmitting} sx={{ height: 60, bgcolor: '#0057FF' }}>
                                            {isSubmitting ? <CircularProgress size={24} color="inherit" /> : t('forms:fiber.buttons.submit')}
                                        </Button>
                                    </Stack>
                                </Stack>
                            </form>
                        )}
                        {step === 3 && (
                            <Box sx={{ textAlign: 'center', py: 4 }}>
                                <Avatar sx={{ width: 80, height: 80, bgcolor: '#4ADE80', mx: 'auto', mb: 3 }}><CheckCircle size={40} /></Avatar>
                                <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>{t('forms:fiber.steps.success')}</Typography>
                                <Typography color="text.secondary" sx={{ mb: 4 }}>{t('forms:fiber.messages.success')}</Typography>
                                <Paper sx={{ p: 2, bgcolor: 'rgba(0,87,255,0.05)', display: 'flex', gap: 2, alignItems: 'center', mb: 4 }}>
                                    <Info color="#0057FF" size={20} />
                                    <Typography variant="caption" textAlign="left">{t('forms:fiber.messages.info')}</Typography>
                                </Paper>
                                <Button fullWidth variant="contained" onClick={onClose} sx={{ height: 60, bgcolor: '#0A1A3C' }}>{t('common:buttons.close')}</Button>
                            </Box>
                        )}
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default FiberOrderForm;
