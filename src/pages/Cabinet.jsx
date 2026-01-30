import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
    Box,
    Container,
    Paper,
    Typography,
    Avatar,
    Button,
    Stack,
    Tab,
    Tabs,
    TextField,
    Divider,
    Chip,
    IconButton,
    Snackbar,
    Alert,
    Switch,
    FormControlLabel
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    XAxis,
    Tooltip as RechartsTooltip
} from 'recharts';
import {
    Zap,
    ShieldCheck,
    Plus,
    Trophy,
    Bell,
    Settings,
    Package,
    FileText,
    CreditCard,
    Globe,
    Tv,
    Camera
} from 'lucide-react';
import { USAGE_MOCK } from '../constants';
import { useUser } from '../context/UserContext';

export const Cabinet = () => {
    const { t } = useTranslation(['cabinet', 'common']);
    const { user, markNotificationRead, updateProfile, changePassword } = useUser();
    const [tabValue, setTabValue] = useState(0);

    const [profileName, setProfileName] = useState(user?.name || '');
    const [profileEmail, setProfileEmail] = useState(user?.email || '');
    const [profileAvatar, setProfileAvatar] = useState(user?.avatar || '');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [pushEnabled, setPushEnabled] = useState(true);

    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

    React.useEffect(() => {
        if (user) {
            setProfileName(user.name || '');
            setProfileEmail(user.email || '');
            setProfileAvatar(user.avatar || '');
        }
    }, [user]);

    if (!user) {
        return <Navigate to="/" replace />;
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleAvatarFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdateProfile = () => {
        const result = updateProfile({
            name: profileName,
            email: profileEmail,
            avatar: profileAvatar
        });
        if (result.success) {
            setSnackbar({ open: true, message: t('cabinet:settings.success'), severity: 'success' });
        }
    };

    const handleChangePassword = () => {
        if (!currentPassword || !newPassword) {
            setSnackbar({ open: true, message: t('common:errors.fillAll'), severity: 'error' });
            return;
        }
        const result = changePassword(currentPassword, newPassword);
        if (result.success) {
            setSnackbar({ open: true, message: t('cabinet:settings.success'), severity: 'success' });
            setCurrentPassword('');
            setNewPassword('');
        } else {
            setSnackbar({ open: true, message: result.error, severity: 'error' });
        }
    };

    const REWARDS = [
        { title: t('cabinet:rewards.internet10gb'), points: 500, icon: Globe },
        { title: t('cabinet:rewards.tvSubscription'), points: 1200, icon: Tv },
        { title: t('cabinet:rewards.vipStatus'), points: 5000, icon: Trophy }
    ];

    const unreadCount = user.notifications.filter(n => !n.read).length;

    return (
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ p: 4, textAlign: 'center', mb: 3 }}>
                        <Avatar
                            src={user.avatar || `https://i.pravatar.cc/150?u=${user.id}`}
                            sx={{ width: 100, height: 100, mx: 'auto', mb: 2, border: '4px solid #F5F7FA' }}
                        />
                        <Typography variant="h6" sx={{ fontWeight: 800 }}>{user.name}</Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 3 }}>{t('cabinet:id')}: {user.id}</Typography>

                        <Paper variant="outlined" sx={{ p: 2, textAlign: 'left', bgcolor: '#F8FAFC', borderRadius: '16px' }}>
                            <Typography variant="caption" sx={{ color: '#0057FF', fontWeight: 800, textTransform: 'uppercase', mb: 1, display: 'block' }}>
                                {t('cabinet:balance')}
                            </Typography>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="h5" sx={{ fontWeight: 900 }}>{user.balance.toLocaleString()} {t('common:currency')}</Typography>
                                <IconButton size="small" sx={{ bgcolor: '#0057FF', color: 'white', '&:hover': { bgcolor: '#0046CC' } }}>
                                    <Plus size={18} />
                                </IconButton>
                            </Stack>
                        </Paper>
                    </Paper>

                    <Paper sx={{ p: 1 }}>
                        <Tabs
                            orientation="vertical"
                            value={tabValue}
                            onChange={handleTabChange}
                            sx={{
                                '& .MuiTab-root': {
                                    alignItems: 'flex-start',
                                    textAlign: 'left',
                                    borderRadius: '12px',
                                    mb: 0.5,
                                    minHeight: 56,
                                    fontWeight: 700
                                },
                                '& .Mui-selected': { bgcolor: '#0057FF', color: 'white !important' },
                                '& .MuiTabs-indicator': { display: 'none' }
                            }}
                        >
                            <Tab icon={<Stack direction="row" spacing={2} alignItems="center"><Package size={20} /> <Typography variant="body2" sx={{ fontWeight: 700 }}>{t('cabinet:tabs.main')}</Typography></Stack>} iconPosition="start" />
                            <Tab icon={<Stack direction="row" spacing={2} alignItems="center"><Trophy size={20} /> <Typography variant="body2" sx={{ fontWeight: 700 }}>{t('cabinet:tabs.rewards')}</Typography></Stack>} iconPosition="start" />
                            <Tab icon={<Stack direction="row" spacing={2} alignItems="center"><Bell size={20} /> <Typography variant="body2" sx={{ fontWeight: 700 }}>{t('cabinet:tabs.messages')}</Typography> {unreadCount > 0 && <Chip label={unreadCount} size="small" color="error" sx={{ height: 18, fontSize: '0.6rem' }} />}</Stack>} iconPosition="start" />
                            <Tab icon={<Stack direction="row" spacing={2} alignItems="center"><FileText size={20} /> <Typography variant="body2" sx={{ fontWeight: 700 }}>{t('cabinet:tabs.payments')}</Typography></Stack>} iconPosition="start" />
                            <Tab icon={<Stack direction="row" spacing={2} alignItems="center"><Settings size={20} /> <Typography variant="body2" sx={{ fontWeight: 700 }}>{t('cabinet:tabs.settings')}</Typography></Stack>} iconPosition="start" />
                        </Tabs>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={9}>
                    {tabValue === 0 && (
                        <Stack spacing={4}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Paper sx={{ p: 4, bgcolor: '#0A1A3C', color: 'white', height: '100%' }}>
                                        <Typography variant="overline" sx={{ color: '#00E0FF', fontWeight: 800 }}>{t('cabinet:activeTariff')}</Typography>
                                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 4 }}>{user.tariff}</Typography>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <Paper sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.05)', color: 'white' }}>
                                                    <Typography variant="caption" sx={{ display: 'block', opacity: 0.6 }}>{t('cabinet:internet')}</Typography>
                                                    <Typography sx={{ fontWeight: 700 }}>{t('cabinet:unlimited')}</Typography>
                                                </Paper>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Paper sx={{ p: 2, bgcolor: 'rgba(255,255,255,0.05)', color: 'white' }}>
                                                    <Typography variant="caption" sx={{ display: 'block', opacity: 0.6 }}>{t('cabinet:expiry')}</Typography>
                                                    <Typography sx={{ fontWeight: 700 }}>24/05/2025</Typography>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Paper sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 3 }}>{t('cabinet:stats.title')}</Typography>
                                        <Box sx={{ flexGrow: 1, minHeight: 150 }}>
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={USAGE_MOCK}>
                                                    <XAxis dataKey="day" hide />
                                                    <RechartsTooltip />
                                                    <Area type="monotone" dataKey="data" stroke="#0057FF" strokeWidth={3} fill="rgba(0, 87, 255, 0.1)" />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>

                            <Paper sx={{ p: 4 }}>
                                <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>{t('cabinet:recentActions.title')}</Typography>
                                <Stack spacing={2}>
                                    {user.transactions.slice(0, 3).map((tx, idx) => (
                                        <Paper key={idx} variant="outlined" sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '16px' }}>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Avatar sx={{ bgcolor: 'rgba(34, 204, 136, 0.1)', color: '#22CC88' }}>
                                                    <CreditCard size={20} />
                                                </Avatar>
                                                <Box>
                                                    <Typography variant="body2" sx={{ fontWeight: 700 }}>{tx.method} {t('cabinet:recentActions.paymentThrough')}</Typography>
                                                    <Typography variant="caption" color="text.secondary">{tx.date.toLocaleDateString()}</Typography>
                                                </Box>
                                            </Stack>
                                            <Typography sx={{ fontWeight: 800, color: '#22CC88' }}>+{tx.amount.toLocaleString()} {t('common:currency')}</Typography>
                                        </Paper>
                                    ))}
                                </Stack>
                            </Paper>
                        </Stack>
                    )}

                    {tabValue === 1 && (
                        <Paper sx={{ p: 4 }}>
                            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4 }}>{t('cabinet:tabs.rewards')}</Typography>
                            {REWARDS.length > 0 ? (
                                <Grid container spacing={3}>
                                    {REWARDS.map((reward, idx) => (
                                        <Grid item xs={12} sm={6} md={4} key={idx}>
                                            <Paper variant="outlined" sx={{ p: 3, textAlign: 'center', height: '100%', borderRadius: '24px', '&:hover': { borderColor: '#0057FF', bgcolor: 'rgba(0, 87, 255, 0.02)' }, transition: 'all 0.3s' }}>
                                                <Avatar sx={{ width: 56, height: 56, mx: 'auto', mb: 2, bgcolor: 'rgba(0, 87, 255, 0.1)', color: '#0057FF' }}>
                                                    <reward.icon size={28} />
                                                </Avatar>
                                                <Typography variant="body1" sx={{ fontWeight: 800, mb: 1 }}>{reward.title}</Typography>
                                                <Typography variant="caption" sx={{ color: '#0057FF', fontWeight: 800, display: 'block', mb: 2 }}>{reward.points} {t('cabinet:points')}</Typography>
                                                <Button fullWidth variant="contained" size="small" sx={{ borderRadius: '12px' }}>{t('common:buttons.exchange')}</Button>
                                            </Paper>
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : (
                                <Box sx={{ textAlign: 'center', py: 10, opacity: 0.5 }}>
                                    <Trophy size={64} style={{ marginBottom: 16, strokeWidth: 1 }} />
                                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{t('cabinet:rewards.noRewards')}</Typography>
                                </Box>
                            )}
                        </Paper>
                    )}

                    {tabValue === 2 && (
                        <Paper sx={{ p: 4 }}>
                            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4 }}>{t('cabinet:notifications.title')}</Typography>
                            <Stack spacing={2}>
                                {user.notifications.map((n) => (
                                    <Paper
                                        key={n.id}
                                        onClick={() => markNotificationRead(n.id)}
                                        variant="outlined"
                                        sx={{
                                            p: 3,
                                            borderRadius: '20px',
                                            cursor: 'pointer',
                                            borderColor: n.read ? '#eee' : '#0057FF',
                                            bgcolor: n.read ? 'white' : 'rgba(0, 87, 255, 0.02)',
                                            opacity: n.read ? 0.7 : 1
                                        }}
                                    >
                                        <Stack direction="row" spacing={3} alignItems="flex-start">
                                            <Avatar sx={{ bgcolor: n.type === 'success' ? '#22CC88' : '#0057FF' }}>
                                                <Bell size={20} />
                                            </Avatar>
                                            <Box sx={{ flexGrow: 1 }}>
                                                <Typography sx={{ fontWeight: 800 }}>{t(n.title)}</Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                                    {t(n.message, { amount: n.amount?.toLocaleString() })}
                                                </Typography>
                                                <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.5 }}>{n.date.toLocaleDateString()}</Typography>
                                            </Box>
                                            {!n.read && <Box sx={{ width: 10, height: 10, bgcolor: '#FF305A', borderRadius: '50%', mt: 1 }} />}
                                        </Stack>
                                    </Paper>
                                ))}
                            </Stack>
                        </Paper>
                    )}

                    {tabValue === 3 && (
                        <Paper sx={{ p: 4 }}>
                            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4 }}>{t('cabinet:tabs.payments')}</Typography>
                            <Stack spacing={2}>
                                {user.transactions.length > 0 ? (
                                    user.transactions.map((tx, idx) => (
                                        <Paper key={idx} variant="outlined" sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '20px' }}>
                                            <Stack direction="row" spacing={3} alignItems="center">
                                                <Avatar sx={{ bgcolor: 'rgba(34, 204, 136, 0.1)', color: '#22CC88', width: 50, height: 50 }}>
                                                    <CreditCard size={24} />
                                                </Avatar>
                                                <Box>
                                                    <Typography variant="body1" sx={{ fontWeight: 800 }}>{tx.method} {t('cabinet:recentActions.paymentThrough')}</Typography>
                                                    <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>ID: {tx.id} • {tx.date.toLocaleString()}</Typography>
                                                </Box>
                                            </Stack>
                                            <Box sx={{ textAlign: 'right' }}>
                                                <Typography variant="h6" sx={{ fontWeight: 900, color: '#22CC88' }}>+{tx.amount.toLocaleString()} {t('common:currency')}</Typography>
                                                <Chip label={t('cabinet:services.active')} size="small" sx={{ bgcolor: 'rgba(34, 204, 136, 0.1)', color: '#22CC88', fontWeight: 700, borderRadius: '8px' }} />
                                            </Box>
                                        </Paper>
                                    ))
                                ) : (
                                    <Box sx={{ textAlign: 'center', py: 8, opacity: 0.5 }}>
                                        <FileText size={48} style={{ marginBottom: 16 }} />
                                        <Typography>{t('cabinet:payments.empty')}</Typography>
                                    </Box>
                                )}
                            </Stack>
                        </Paper>
                    )}

                    {tabValue === 4 && (
                        <Paper sx={{ p: 4 }}>
                            <Typography variant="h5" sx={{ fontWeight: 900, mb: 4 }}>{t('cabinet:tabs.settings')}</Typography>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={3}>
                                        <Typography variant="h6" sx={{ fontWeight: 800 }}>{t('cabinet:settings.profile')}</Typography>

                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 1 }}>
                                            <Avatar
                                                src={profileAvatar || `https://i.pravatar.cc/150?u=${user.id}`}
                                                sx={{ width: 80, height: 80, border: '3px solid #0057FF' }}
                                            />
                                            <Box>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    id="avatar-upload"
                                                    style={{ display: 'none' }}
                                                    onChange={handleAvatarFileChange}
                                                />
                                                <label htmlFor="avatar-upload">
                                                    <Button variant="outlined" component="span" startIcon={<Camera size={18} />} sx={{ borderRadius: '12px' }}>
                                                        {t('cabinet:settings.uploadPhoto')}
                                                    </Button>
                                                </label>
                                                <Typography variant="caption" sx={{ display: 'block', mt: 1, opacity: 0.6 }}>
                                                    {t('cabinet:settings.photoRequirements')}
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <TextField
                                            fullWidth
                                            label={t('cabinet:settings.name')}
                                            value={profileName}
                                            onChange={(e) => setProfileName(e.target.value)}
                                            variant="outlined"
                                        />
                                        <TextField
                                            fullWidth
                                            label={t('cabinet:settings.email')}
                                            value={profileEmail}
                                            onChange={(e) => setProfileEmail(e.target.value)}
                                            variant="outlined"
                                        />
                                        <TextField
                                            fullWidth
                                            label={t('cabinet:settings.phone')}
                                            value={user.phone}
                                            disabled
                                            variant="outlined"
                                        />
                                        <Button
                                            variant="contained"
                                            onClick={handleUpdateProfile}
                                            sx={{ bgcolor: '#0057FF', borderRadius: '12px', height: 48 }}
                                        >
                                            {t('cabinet:settings.save')}
                                        </Button>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={3}>
                                        <Typography variant="h6" sx={{ fontWeight: 800 }}>{t('cabinet:settings.security')}</Typography>
                                        <TextField
                                            fullWidth
                                            label={t('cabinet:settings.currentPassword')}
                                            type="password"
                                            value={currentPassword}
                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                            variant="outlined"
                                        />
                                        <TextField
                                            fullWidth
                                            label={t('cabinet:settings.newPassword')}
                                            type="password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            variant="outlined"
                                        />
                                        <Button
                                            variant="outlined"
                                            onClick={handleChangePassword}
                                            sx={{ borderRadius: '12px', height: 48 }}
                                        >
                                            {t('cabinet:settings.changePassword')}
                                        </Button>

                                        <Divider sx={{ my: 2 }} />

                                        <Typography variant="h6" sx={{ fontWeight: 800 }}>{t('cabinet:settings.notifications')}</Typography>
                                        <FormControlLabel
                                            control={<Switch checked={pushEnabled} onChange={(e) => setPushEnabled(e.target.checked)} color="primary" />}
                                            label={t('cabinet:settings.pushNotifications')}
                                        />
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Paper>
                    )}
                </Grid>
            </Grid>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert severity={snackbar.severity} sx={{ width: '100%', borderRadius: '12px' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Cabinet;
