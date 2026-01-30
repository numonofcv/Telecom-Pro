import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Stack,
    Menu,
    MenuItem,
    Avatar,
    Divider,
    Grid,
    ListItemIcon,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Globe,
    User,
    LogOut,
    ChevronDown,
    Building2,
    TrendingUp,
    Shield,
    Phone,
    Mail,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Tv,
    Smartphone,
    X,
    CreditCard
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const NAV_ITEMS = [
    { label: 'navbar.home', path: '/', icon: <HomeIcon size={20} /> },
    { label: 'navbar.internet', path: '/internet', icon: <Globe size={20} /> },
    { label: 'navbar.mobile', path: '/mobile', icon: <Smartphone size={20} /> },
    { label: 'navbar.tv', path: '/tv', icon: <Tv size={20} /> },
    { label: 'navbar.payment', path: '/payment', icon: <CreditCard size={20} /> },
    { label: 'navbar.business', path: '/business', icon: <Building2 size={20} /> }
];

export const Header = () => {
    const { t, i18n } = useTranslation('common');
    const { user, logout } = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [mobileOpen, setMobileOpen] = useState(false);
    const [langAnchor, setLangAnchor] = useState(null);
    const [userAnchor, setUserAnchor] = useState(null);

    const languages = [
        { code: 'uz', label: 'O\'zbekcha' },
        { code: 'en', label: 'English' },
        { code: 'ru', label: 'Русский' }
    ];

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        localStorage.setItem('language', code);
        setLangAnchor(null);
    };

    return (
        <AppBar
            position="sticky"
            sx={{
                bgcolor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                color: '#0A1A3C',
                boxShadow: 'none',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                borderRadius: 0
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ height: { xs: 60, md: 90 } }}>
                    <Typography
                        variant="h5"
                        component={Link}
                        to="/"
                        sx={{
                            fontWeight: 900,
                            textDecoration: 'none',
                            color: '#0057FF',
                            letterSpacing: -1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}
                    >
                        TELECOM <span style={{ color: '#0A1A3C' }}>PRO</span>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 1 }}>
                        {NAV_ITEMS.map((item) => (
                            <Button
                                key={item.path}
                                component={Link}
                                to={item.path}
                                sx={{
                                    px: 3,
                                    fontWeight: 700,
                                    color: location.pathname === item.path ? '#0057FF' : '#475569',
                                    '&:hover': { color: '#0057FF', bgcolor: 'transparent' }
                                }}
                            >
                                {t(item.label)}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'none' } }} />

                    <Stack direction="row" spacing={1} alignItems="center">
                        <Button
                            startIcon={<Globe size={18} />}
                            onClick={(e) => setLangAnchor(e.currentTarget)}
                            sx={{
                                color: '#0A1A3C',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                display: { xs: 'none', md: 'inline-flex' }
                            }}
                        >
                            {i18n.language}
                        </Button>

                        {user ? (
                            <>
                                <IconButton onClick={(e) => setUserAnchor(e.currentTarget)}>
                                    <Avatar src={user.avatar} sx={{ width: 40, height: 40, border: '2px solid #0057FF' }} />
                                </IconButton>
                                <Menu
                                    anchorEl={userAnchor}
                                    open={Boolean(userAnchor)}
                                    onClose={() => setUserAnchor(null)}
                                    PaperProps={{ sx: { borderRadius: '16px', mt: 1.5, minWidth: 200, boxShadow: '0 10px 40px rgba(0,0,0,0.1)' } }}
                                >
                                    <Box sx={{ px: 2, py: 1.5 }}>
                                        <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{user.name}</Typography>
                                        <Typography variant="caption" color="text.secondary">{user.phone}</Typography>
                                    </Box>
                                    <Divider />
                                    <MenuItem onClick={() => { navigate('/cabinet'); setUserAnchor(null); }} sx={{ py: 1.5 }}>
                                        <ListItemIcon><User size={18} /></ListItemIcon>
                                        <ListItemText primary={t('navbar.profile')} primaryTypographyProps={{ fontWeight: 700 }} />
                                    </MenuItem>
                                    <MenuItem onClick={() => { logout(); navigate('/'); setUserAnchor(null); }} sx={{ py: 1.5, color: '#FF305A' }}>
                                        <ListItemIcon><LogOut size={18} color="#FF305A" /></ListItemIcon>
                                        <ListItemText primary={t('navbar.logout')} primaryTypographyProps={{ fontWeight: 700 }} />
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Button
                                variant="contained"
                                onClick={() => navigate('/auth')}
                                sx={{
                                    bgcolor: '#0057FF',
                                    borderRadius: '12px',
                                    px: 4,
                                    fontWeight: 800,
                                    display: { xs: 'none', md: 'inline-flex' }
                                }}
                            >
                                {t('navbar.login')}
                            </Button>
                        )}

                        <IconButton sx={{ display: { md: 'none' } }} onClick={() => setMobileOpen(true)}>
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>

            <Menu
                anchorEl={langAnchor}
                open={Boolean(langAnchor)}
                onClose={() => setLangAnchor(null)}
                PaperProps={{ sx: { borderRadius: '16px', mt: 1.5, minWidth: 160 } }}
            >
                {languages.map((lang) => (
                    <MenuItem key={lang.code} onClick={() => changeLanguage(lang.code)} selected={i18n.language === lang.code} sx={{ fontWeight: 700 }}>
                        {lang.label}
                    </MenuItem>
                ))}
            </Menu>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={() => setMobileOpen(false)}
                PaperProps={{
                    sx: {
                        width: 320,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '24px 0 0 24px'
                    }
                }}
            >
                <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 900,
                            color: '#0057FF',
                            letterSpacing: -1,
                        }}
                    >
                        TELECOM <span style={{ color: '#0A1A3C' }}>PRO</span>
                    </Typography>
                    <IconButton onClick={() => setMobileOpen(false)} sx={{ color: '#475569' }}>
                        <X size={24} />
                    </IconButton>
                </Box>

                {user && (
                    <Box sx={{ p: 3, bgcolor: 'rgba(0,87,255,0.02)', borderBottom: '1px solid rgba(0,87,255,0.05)' }}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Avatar src={user.avatar} sx={{ width: 50, height: 50, border: '2px solid #0057FF' }} />
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 800, lineHeight: 1.2 }}>{user.name}</Typography>
                                <Typography variant="caption" color="text.secondary">{user.phone}</Typography>
                            </Box>
                        </Stack>
                    </Box>
                )}

                <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 2 }}>
                    <List sx={{ pt: 0 }}>
                        {NAV_ITEMS.map((item) => (
                            <ListItem
                                button
                                key={item.path}
                                component={Link}
                                to={item.path}
                                onClick={() => setMobileOpen(false)}
                                sx={{
                                    borderRadius: '12px',
                                    mb: 1,
                                    py: 1.5,
                                    bgcolor: location.pathname === item.path ? 'rgba(0,87,255,0.08)' : 'transparent',
                                    '&:hover': { bgcolor: 'rgba(0,87,255,0.05)' }
                                }}
                            >
                                <ListItemIcon sx={{ minWidth: 44, color: location.pathname === item.path ? '#0057FF' : '#64748b' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={t(item.label)}
                                    primaryTypographyProps={{
                                        fontWeight: 700,
                                        color: location.pathname === item.path ? '#0057FF' : '#1e293b'
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>

                    <Divider sx={{ my: 2, opacity: 0.6 }} />

                    <Typography variant="overline" sx={{ px: 2, color: 'text.secondary', fontWeight: 800 }}>
                        {t('navbar.language')}
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ px: 1, mt: 1 }}>
                        {languages.map((lang) => (
                            <Button
                                key={lang.code}
                                size="small"
                                variant={i18n.language === lang.code ? "contained" : "outlined"}
                                onClick={() => changeLanguage(lang.code)}
                                sx={{
                                    flex: 1,
                                    borderRadius: '10px',
                                    fontWeight: 700,
                                    fontSize: '0.75rem',
                                    textTransform: 'none',
                                    height: 38,
                                    boxShadow: 'none',
                                    bgcolor: i18n.language === lang.code ? '#0057FF' : 'transparent',
                                    borderColor: i18n.language === lang.code ? '#0057FF' : 'rgba(0,0,0,0.1)',
                                    color: i18n.language === lang.code ? 'white' : 'text.primary',
                                    '&:hover': {
                                        bgcolor: i18n.language === lang.code ? '#0046CC' : 'rgba(0,0,0,0.02)',
                                        borderColor: i18n.language === lang.code ? '#0046CC' : 'rgba(0,0,0,0.2)',
                                    }
                                }}
                            >
                                {lang.label.split(' ')[0]}
                            </Button>
                        ))}
                    </Stack>
                </Box>

                <Box sx={{ p: 3, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                    {user ? (
                        <Button
                            fullWidth
                            variant="outlined"
                            color="error"
                            startIcon={<LogOut size={20} />}
                            onClick={() => { logout(); navigate('/'); setMobileOpen(false); }}
                            sx={{
                                height: 54,
                                borderRadius: '14px',
                                fontWeight: 800,
                                border: '1.5px solid',
                                '&:hover': { border: '1.5px solid' }
                            }}
                        >
                            {t('navbar.logout')}
                        </Button>
                    ) : (
                        <Button
                            fullWidth
                            variant="contained"
                            startIcon={<User size={20} />}
                            onClick={() => { navigate('/auth'); setMobileOpen(false); }}
                            sx={{
                                height: 54,
                                borderRadius: '14px',
                                fontWeight: 800,
                                bgcolor: '#0057FF',
                                boxShadow: '0 8px 20px rgba(0,87,255,0.15)',
                                '&:hover': { bgcolor: '#0046CC', boxShadow: '0 10px 25px rgba(0,87,255,0.2)' }
                            }}
                        >
                            {t('navbar.login')}
                        </Button>
                    )}
                </Box>
            </Drawer>
        </AppBar>
    );
};

export const Footer = () => {
    const { t } = useTranslation('common');

    return (
        <Box sx={{ bgcolor: '#0F172A', color: 'white', pt: 12, pb: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} sx={{ mb: 10 }}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h5" sx={{ fontWeight: 900, mb: 4, color: '#00E0FF' }}>TELECOM PRO</Typography>
                        <Typography sx={{ opacity: 0.6, mb: 5, lineHeight: 1.8 }}>{t('footer.desc')}</Typography>
                        <Stack direction="row" spacing={2}>
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                                <IconButton key={i} sx={{ bgcolor: 'rgba(255,255,255,0.05)', color: 'white', '&:hover': { bgcolor: '#0057FF' } }}><Icon size={20} /></IconButton>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>{t('footer.services')}</Typography>
                        <Stack spacing={2}>
                            {[t('footer.internet'), t('footer.mobile'), t('footer.tv'), t('footer.business')].map((item, i) => (
                                <Typography key={i} sx={{ opacity: 0.6, cursor: 'pointer', '&:hover': { opacity: 1, color: '#00E0FF' } }}>{item}</Typography>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={2}>
                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>{t('footer.company')}</Typography>
                        <Stack spacing={2}>
                            {[t('footer.about'), t('footer.careers'), t('footer.news'), t('footer.contact')].map((item, i) => (
                                <Typography key={i} sx={{ opacity: 0.6, cursor: 'pointer', '&:hover': { opacity: 1, color: '#00E0FF' } }}>{item}</Typography>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>{t('footer.newsletter')}</Typography>
                        <Typography sx={{ opacity: 0.6, mb: 3 }}>{t('footer.followUs')}</Typography>
                        <Box sx={{ p: 1, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: '16px', display: 'flex' }}>
                            <input
                                type="text"
                                placeholder={t('footer.emailPlaceholder')}
                                style={{ background: 'none', border: 'none', color: 'white', padding: '0 15px', flexGrow: 1, outline: 'none' }}
                            />
                            <Button variant="contained" sx={{ bgcolor: '#0057FF', borderRadius: '12px' }}>{t('buttons.submit')}</Button>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.05)', mb: 4 }} />

                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={3}>
                    <Typography variant="caption" sx={{ opacity: 0.5 }}>{t('footer.copyright')}</Typography>
                    <Stack direction="row" spacing={4}>
                        <Typography variant="caption" sx={{ opacity: 0.5, cursor: 'pointer', '&:hover': { opacity: 1 } }}>{t('footer.terms')}</Typography>
                        <Typography variant="caption" sx={{ opacity: 0.5, cursor: 'pointer', '&:hover': { opacity: 1 } }}>{t('footer.privacy')}</Typography>
                        <Typography variant="caption" sx={{ opacity: 0.5, cursor: 'pointer', '&:hover': { opacity: 1 } }}>{t('footer.legal')}</Typography>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Box component="main" sx={{ minHeight: '80vh' }}>
                {children}
            </Box>
            <Footer />
        </>
    );
};

export default Layout;
