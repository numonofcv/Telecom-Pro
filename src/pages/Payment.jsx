import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Paper,
    TextField,
    Button,
    Stack,
    Divider,
    Stepper,
    Step,
    StepLabel,
    InputAdornment,
    CircularProgress,
    Avatar
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    CreditCard,
    User,
    ShieldCheck,
    CheckCircle,
    Phone
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Payment = () => {
    const { t } = useTranslation(['payment', 'common']);
    const { user, addBalance } = useUser();
    const [activeStep, setActiveStep] = useState(0);
    const [amount, setAmount] = useState('');
    const [accountId, setAccountId] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to="/auth" replace />;
    }

    const handleNext = () => {
        if (activeStep === 0) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setActiveStep(1);
            }, 1000);
        } else if (activeStep === 1) {
            setLoading(true);
            setTimeout(() => {
                addBalance(parseInt(amount), 'CARD');
                setLoading(false);
                setActiveStep(2);
            }, 2000);
        }
    };

    const steps = [
        t('payment:steps.identity'),
        t('payment:steps.method'),
        t('payment:steps.finish')
    ];

    return (
        <Container maxWidth="md" sx={{ py: 10 }}>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>{t('payment:title')}</Typography>
                <Typography color="text.secondary">{t('payment:subtitle')}</Typography>
            </Box>

            <Stepper activeStep={activeStep} sx={{ mb: 8 }}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel sx={{ '& .MuiStepLabel-label': { fontWeight: 700 } }}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: '40px', border: '1px solid #eee', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
                {activeStep === 0 && (
                    <Stack spacing={4}>
                        <Typography variant="h5" sx={{ fontWeight: 800 }}>{t('payment:steps.identity')}</Typography>
                        <TextField
                            fullWidth
                            label={t('payment:form.accountLabel')}
                            placeholder={t('payment:form.accountPlaceholder')}
                            value={accountId}
                            onChange={(e) => setAccountId(e.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><User size={20} /></InputAdornment>
                            }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            size="large"
                            onClick={handleNext}
                            disabled={!accountId || loading}
                            sx={{ height: 64, bgcolor: '#0057FF' }}
                        >
                            {loading ? <CircularProgress size={24} color="inherit" /> : t('payment:form.submit')}
                        </Button>
                    </Stack>
                )}

                {activeStep === 1 && (
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={5}>
                            <Paper sx={{ p: 4, bgcolor: '#0A1A3C', color: 'white', height: '100%' }}>
                                <Typography variant="overline" sx={{ color: '#00E0FF', fontWeight: 800 }}>{t('payment:form.customerInfo')}</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{user.name}</Typography>
                                <Typography variant="body2" sx={{ opacity: 0.6, fontMono: true, mb: 4 }}>ID: {user.id}</Typography>
                                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.1)', mb: 3 }} />
                                <Typography variant="caption" sx={{ display: 'block', opacity: 0.6 }}>{t('payment:form.currentBalance')}</Typography>
                                <Typography variant="h6" sx={{ fontWeight: 800, color: '#00E0FF' }}>{user.balance.toLocaleString()} {t('common:currency')}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Stack spacing={3}>
                                <Typography variant="h6" sx={{ fontWeight: 800 }}>{t('payment:form.amountLabel')}</Typography>
                                <TextField
                                    fullWidth
                                    type="number"
                                    placeholder="0.00"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Typography sx={{ fontWeight: 900, color: '#94A3B8' }}>{t('common:currency')}</Typography></InputAdornment>
                                    }}
                                    sx={{ '& .MuiOutlinedInput-input': { fontSize: '2rem', fontWeight: 900 } }}
                                />
                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    onClick={handleNext}
                                    disabled={!amount || loading}
                                    sx={{ height: 64, bgcolor: '#0057FF' }}
                                >
                                    {loading ? <CircularProgress size={24} color="inherit" /> : t('payment:form.pay')}
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                )}

                {activeStep === 2 && (
                    <Box sx={{ textAlign: 'center', py: 4 }}>
                        <Avatar sx={{ width: 80, height: 80, bgcolor: '#22CC88', mx: 'auto', mb: 3 }}>
                            <CheckCircle size={40} />
                        </Avatar>
                        <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>{t('payment:success.title')}</Typography>
                        <Typography color="text.secondary" sx={{ mb: 5 }}>{t('payment:success.message', { amount: parseInt(amount).toLocaleString() })}</Typography>
                        <Button variant="outlined" size="large" onClick={() => navigate('/cabinet')} sx={{ height: 56, px: 6 }}>{t('payment:success.backToCabinet')}</Button>
                    </Box>
                )}
            </Paper>
        </Container>
    );
};

export default Payment;
