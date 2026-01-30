import React, { useState } from 'react';
import {
    Box,
    Container,
    Paper,
    Typography,
    TextField,
    Button,
    Stack,
    Divider,
    IconButton,
    InputAdornment
} from '@mui/material';
import {
    Lock,
    Phone,
    User,
    Eye,
    EyeOff,
    ArrowLeft
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useTranslation } from 'react-i18next';

export const Auth = () => {
    const { t } = useTranslation(['auth', 'common']);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login, register } = useUser();

    const handleLogin = () => {
        setError('');

        if (isLogin) {
            if (!phone || !password) {
                setError(t('auth:errors.fillAll'));
                return;
            }
            const result = login(phone, password);
            if (result.success) {
                navigate('/cabinet');
            } else {
                setError(result.error);
            }
        } else {
            if (!name || !phone || !password) {
                setError(t('auth:errors.fillAll'));
                return;
            }
            const result = register(name, phone, password);
            if (result.success) {
                navigate('/cabinet');
            } else {
                setError(result.error);
            }
        }
    };

    return (
        <Container maxWidth="sm" sx={{ py: { xs: 6, md: 15 } }}>
            <Paper sx={{ p: { xs: 4, md: 6 }, borderRadius: '40px', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>
                <Stack spacing={3}>
                    <IconButton onClick={() => navigate(-1)} sx={{ alignSelf: 'flex-start', mb: 2 }}>
                        <ArrowLeft size={24} />
                    </IconButton>

                    <Box textAlign="center" sx={{ mb: 4 }}>
                        <Typography variant="h4" sx={{ fontWeight: 900, mb: 1 }}>
                            {isLogin ? t('auth:title.login') : t('auth:title.register')}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {isLogin ? t('auth:subtitle.login') : t('auth:subtitle.register')}
                        </Typography>
                    </Box>

                    {error && (
                        <Paper sx={{ p: 2, bgcolor: '#FEF2F2', color: '#EF4444', borderRadius: '12px', textAlign: 'center', mb: 2 }}>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>{error}</Typography>
                        </Paper>
                    )}

                    <Stack spacing={2.5}>
                        {!isLogin && (
                            <TextField
                                fullWidth
                                label={t('auth:fields.name')}
                                placeholder={t('auth:fields.namePlaceholder')}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={!!error && !name}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <User size={18} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                        <TextField
                            fullWidth
                            placeholder={t('auth:fields.phonePlaceholder')}
                            label={t('auth:fields.phone')}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            error={!!error}
                            InputProps={{
                                mapping: 'phone',
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Phone size={18} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            label={t('auth:fields.password')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            error={!!error}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock size={18} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        {isLogin && (
                            <Typography variant="caption" color="primary" sx={{ textAlign: 'right', fontWeight: 700, cursor: 'pointer' }}>
                                {t('auth:buttons.forgotPassword')}
                            </Typography>
                        )}
                    </Stack>

                    <Button
                        fullWidth
                        variant="contained"
                        size="large"
                        onClick={handleLogin}
                        sx={{
                            height: 56,
                            bgcolor: '#0057FF',
                            boxShadow: '0 10px 20px rgba(0,87,255,0.2)',
                            mt: 2
                        }}
                    >
                        {isLogin ? t('auth:buttons.login') : t('auth:buttons.register')}
                    </Button>

                    <Divider sx={{ my: 2 }}>{t('auth:or')}</Divider>

                    <Button
                        fullWidth
                        variant="text"
                        onClick={() => setIsLogin(!isLogin)}
                        sx={{ color: '#0A1A3C', fontWeight: 700 }}
                    >
                        {isLogin ? t('auth:buttons.createAccount') : t('auth:buttons.haveAccount')}
                    </Button>
                </Stack>
            </Paper>
        </Container>
    );
};
export default Auth;
