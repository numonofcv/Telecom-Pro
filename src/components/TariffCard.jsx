import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Paper,
    Box,
    Typography,
    Button,
    Stack,
    IconButton,
    Chip
} from '@mui/material';
import {
    Check,
    ArrowRight,
    Scale
} from 'lucide-react';

export const TariffCard = ({ tariff, onSelect, onCompareToggle, isComparing }) => {
    const { t } = useTranslation();
    const plan = tariff;
    const onOrder = onSelect;
    return (
        <Paper
            className={plan.isPopular ? "cyber-glow" : ""}
            sx={{
                p: 5,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '40px',
                bgcolor: plan.isPopular ? '#0F172A' : 'white',
                color: plan.isPopular ? 'white' : 'inherit',
                border: plan.isPopular ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(0,0,0,0.05)',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: plan.isPopular ? '0 30px 60px rgba(99, 102, 241, 0.2)' : '0 30px 60px rgba(15,23,42,0.1)',
                    borderColor: '#6366F1'
                }
            }}
        >
            {plan.isPopular && (
                <Chip
                    label={t('tariffCard.topOption')}
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 40,
                        transform: 'translateY(-50%)',
                        background: 'linear-gradient(135deg, #6366F1, #A855F7)',
                        fontWeight: 900,
                        color: 'white',
                        px: 1,
                        fontSize: '0.7rem',
                        letterSpacing: 1
                    }}
                />
            )}

            <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 4 }}>
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>{t(plan.name)}</Typography>
                    <Typography variant="caption" sx={{ opacity: 0.6 }}>{t('tariffCard.perfectSolution')}</Typography>
                </Box>
                {onCompareToggle && (
                    <IconButton
                        onClick={() => onCompareToggle(plan)}
                        sx={{
                            bgcolor: isComparing ? '#00E0FF' : 'rgba(0,0,0,0.02)',
                            color: isComparing ? '#0A1A3C' : '#94A3B8',
                            '&:hover': { bgcolor: isComparing ? '#00E0FF' : 'rgba(0,0,0,0.05)' }
                        }}
                    >
                        <Scale size={18} />
                    </IconButton>
                )}
            </Stack>

            <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mb: 6 }}>
                <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: '-2px' }}>{plan.price.toLocaleString()}</Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.5, fontWeight: 700 }}>{t('tariffCard.currency')}</Typography>
            </Stack>

            <Stack spacing={2} sx={{ mb: 6, flexGrow: 1 }}>
                {plan.speed && (
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 24, height: 24, bgcolor: 'rgba(0, 224, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Check size={14} color="#00E0FF" />
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>{plan.speed} {t('tariffCard.speed')}</Typography>
                    </Stack>
                )}
                {plan.data && (
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 24, height: 24, bgcolor: 'rgba(0, 224, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Check size={14} color="#00E0FF" />
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>{plan.data} {t('tariffCard.data')}</Typography>
                    </Stack>
                )}
                {plan.calls && (
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box sx={{ width: 24, height: 24, bgcolor: 'rgba(0, 224, 255, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Check size={14} color="#00E0FF" />
                        </Box>
                        <Typography variant="body2" sx={{ fontWeight: 700 }}>{plan.calls} {t('tariffCard.calls')}</Typography>
                    </Stack>
                )}
                {plan.features.map((feature, i) => (
                    <Stack direction="row" spacing={2} alignItems="center" key={i} sx={{ opacity: 0.6 }}>
                        <Check size={14} />
                        <Typography variant="caption">{t(feature)}</Typography>
                    </Stack>
                ))}
            </Stack>

            <Button
                fullWidth
                variant={plan.isPopular ? "contained" : "outlined"}
                onClick={() => onOrder(plan)}
                endIcon={<ArrowRight size={18} />}
                sx={{
                    height: 64,
                    borderRadius: '20px',
                    bgcolor: plan.isPopular ? '#6366F1' : 'transparent',
                    borderColor: plan.isPopular ? 'transparent' : 'rgba(0,0,0,0.1)',
                    color: plan.isPopular ? 'white' : '#0F172A',
                    fontWeight: 800,
                    '&:hover': {
                        bgcolor: plan.isPopular ? '#4F46E5' : 'rgba(99,102,241,0.05)',
                        borderColor: '#6366F1'
                    }
                }}
            >
                {t('tariffCard.connect')}
            </Button>
        </Paper>
    );
};
export default TariffCard;
