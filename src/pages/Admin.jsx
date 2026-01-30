import React, { useState } from 'react';
import {
    Box,
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Avatar,
    Stack,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    LinearProgress
} from '@mui/material';
import Grid from '@mui/material/Grid';
import {
    LayoutDashboard,
    Users,
    Package,
    CreditCard,
    MessageSquare,
    Settings,
    Bell,
    Search,
    BarChart3,
    Activity
} from 'lucide-react';
import {
    AreaChart,
    Area,
    ResponsiveContainer,
    BarChart,
    Bar
} from 'recharts';
import { useTranslation } from 'react-i18next';

const DRAWER_WIDTH = 280;

export const Admin = () => {
    const { t } = useTranslation(['admin', 'common']);
    const [activeMenu, setActiveMenu] = useState('dashboard');

    const STATS = [
        { label: t('admin:stats.totalUsers'), value: '24,512', change: '+12%', color: '#0057FF' },
        { label: t('admin:stats.monthlyRevenue'), value: '1.2B ' + t('common:currency'), change: '+8.4%', color: '#22CC88' },
        { label: t('admin:stats.activePlans'), value: '18', change: '0%', color: '#8B5CF6' },
        { label: t('admin:stats.openTickets'), value: '42', change: '-5%', color: '#F59E0B' },
    ];

    const REVENUE_DATA = [
        { month: 'Jan', amount: 800 },
        { month: 'Feb', amount: 950 },
        { month: 'Mar', amount: 880 },
        { month: 'Apr', amount: 1100 },
        { month: 'May', amount: 1200 },
    ];

    const TRAFFIC_DATA = [
        { time: '00:00', load: 30 },
        { time: '04:00', load: 15 },
        { time: '08:00', load: 65 },
        { time: '12:00', load: 85 },
        { time: '16:00', load: 75 },
        { time: '20:00', load: 95 },
    ];

    const MENU_ITEMS = [
        { id: 'dashboard', label: t('admin:menu.dashboard'), icon: <LayoutDashboard size={20} /> },
        { id: 'customers', label: t('admin:menu.customers'), icon: <Users size={20} /> },
        { id: 'plans', label: t('admin:menu.plans'), icon: <Package size={20} /> },
        { id: 'payments', label: t('admin:menu.payments'), icon: <CreditCard size={20} /> },
        { id: 'tickets', label: t('admin:menu.tickets'), icon: <MessageSquare size={20} /> },
        { id: 'settings', label: t('admin:menu.settings'), icon: <Settings size={20} /> },
    ];

    return (
        <Box sx={{ display: 'flex', bgcolor: '#F8FAFC', minHeight: '100vh' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: DRAWER_WIDTH,
                    '& .MuiDrawer-paper': { width: DRAWER_WIDTH, bgcolor: '#0A1A3C', color: 'white', border: 'none' },
                }}
            >
                <Box sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar variant="rounded" sx={{ bgcolor: '#0057FF', fontWeight: 900 }}>T</Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 800 }}>{t('admin:title')}</Typography>
                </Box>
                <Divider sx={{ bgcolor: 'rgba(255,255,255,0.05)' }} />
                <List sx={{ px: 2, mt: 2 }}>
                    {MENU_ITEMS.map((item) => (
                        <ListItem
                            button
                            key={item.id}
                            onClick={() => setActiveMenu(item.id)}
                            sx={{
                                borderRadius: '12px',
                                mb: 1,
                                bgcolor: activeMenu === item.id ? '#0057FF' : 'transparent',
                                '&:hover': { bgcolor: activeMenu === item.id ? '#0057FF' : 'rgba(255,255,255,0.05)' }
                            }}
                        >
                            <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 700 }} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
                <AppBar position="static" color="transparent" elevation={0} sx={{ mb: 4 }}>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Typography variant="h4" sx={{ fontWeight: 900, color: '#0A1A3C' }}>{MENU_ITEMS.find(m => m.id === activeMenu)?.label}</Typography>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <IconButton sx={{ bgcolor: 'white', border: '1px solid #eee' }}><Search size={20} /></IconButton>
                            <IconButton sx={{ bgcolor: 'white', border: '1px solid #eee' }}><Bell size={20} /></IconButton>
                            <Avatar src="https://i.pravatar.cc/150?u=admin" />
                        </Stack>
                    </Toolbar>
                </AppBar>

                <Grid container spacing={4}>
                    {STATS.map((stat, i) => (
                        <Grid item xs={12} sm={6} md={3} key={i}>
                            <Paper sx={{ p: 4, borderRadius: '24px' }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
                                    <Box sx={{ width: 48, height: 48, borderRadius: '12px', bgcolor: `${stat.color}10`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Activity size={24} />
                                    </Box>
                                    <Chip label={stat.change} size="small" sx={{ bgcolor: '#ECFDF5', color: '#10B981', fontWeight: 800 }} />
                                </Stack>
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 700 }}>{stat.label}</Typography>
                                <Typography variant="h5" sx={{ fontWeight: 900 }}>{stat.value}</Typography>
                            </Paper>
                        </Grid>
                    ))}

                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 4, borderRadius: '32px', height: 400 }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <BarChart3 color="#0057FF" /> {t('admin:sections.revenueAnalytics')}
                            </Typography>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={REVENUE_DATA}>
                                    <Bar dataKey="amount" fill="#0057FF" radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 4, borderRadius: '32px', height: 400 }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Activity color="#10B981" /> {t('admin:sections.networkLoad')}
                            </Typography>
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={TRAFFIC_DATA}>
                                    <Area type="monotone" dataKey="load" stroke="#10B981" fill="rgba(16, 185, 129, 0.1)" strokeWidth={3} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <TableContainer component={Paper} sx={{ borderRadius: '32px' }}>
                            <Box sx={{ p: 3, borderBottom: '1px solid #eee' }}>
                                <Typography variant="h6" sx={{ fontWeight: 800 }}>{t('admin:sections.liveTransactions')}</Typography>
                            </Box>
                            <Table>
                                <TableHead sx={{ bgcolor: '#F8FAFC' }}>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 800 }}>{t('admin:table.customer')}</TableCell>
                                        <TableCell sx={{ fontWeight: 800 }}>{t('admin:table.type')}</TableCell>
                                        <TableCell sx={{ fontWeight: 800 }}>{t('admin:table.amount')}</TableCell>
                                        <TableCell sx={{ fontWeight: 800 }}>{t('admin:table.time')}</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {[
                                        { user: 'Aziz R.', method: 'Payme', amount: '250,000', date: t('common:time.justNow') },
                                        { user: 'Nozima S.', method: 'Click', amount: '120,000', date: t('common:time.ago', { count: 5 }) },
                                        { user: 'Karim O.', method: 'Visa', amount: '150,000', date: t('common:time.ago', { count: 12 }) },
                                    ].map((row, i) => (
                                        <TableRow key={i}>
                                            <TableCell sx={{ fontWeight: 700 }}>{row.user}</TableCell>
                                            <TableCell>{row.method}</TableCell>
                                            <TableCell sx={{ fontWeight: 800, color: '#10B981' }}>+{row.amount} {t('common:currency')}</TableCell>
                                            <TableCell color="text.secondary">{row.date}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Paper sx={{ p: 4, borderRadius: '32px' }}>
                            <Typography variant="h6" sx={{ fontWeight: 800, mb: 4 }}>{t('admin:sections.serverStatus')}</Typography>
                            <Stack spacing={4}>
                                {[
                                    { label: 'Toshkent Core #1', value: 98, color: '#10B981' },
                                    { label: 'Samarqand 5G', value: 74, color: '#0057FF' },
                                    { label: 'Buxoro Fiber', value: 91, color: '#8B5CF6' },
                                ].map((node, i) => (
                                    <Box key={i}>
                                        <Stack direction="row" justifyContent="space-between" mb={1}>
                                            <Typography variant="body2" sx={{ fontWeight: 700 }}>{node.label}</Typography>
                                            <Typography variant="body2" sx={{ fontWeight: 800 }}>{node.value}%</Typography>
                                        </Stack>
                                        <LinearProgress variant="determinate" value={node.value} sx={{ height: 8, borderRadius: 4, bgcolor: '#eee', '& .MuiLinearProgress-bar': { bgcolor: node.color } }} />
                                    </Box>
                                ))}
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Admin;
