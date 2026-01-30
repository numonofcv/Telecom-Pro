import React, { createContext, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const { t } = useTranslation('forms');
    const MOCK_USER = {
        id: '8841295',
        name: 'Islom Ibragimov',
        phone: '+998 90 123 45 67',
        password: 'admin',
        email: 'islom@telecompro.uz',
        balance: 142500,
        tariff: 'Status Platinum',
        points: 2450,
        avatar: '',
        notifications: [
            { id: '1', title: 'cabinet:notifications.welcome.title', message: 'cabinet:notifications.welcome.message', type: 'info', date: new Date(), read: false },
            { id: '2', title: 'cabinet:notifications.paymentSuccess.title', message: 'cabinet:notifications.paymentSuccess.message', type: 'success', date: new Date(Date.now() - 86400000), read: true, amount: 120000 }
        ],
        transactions: [
            { id: 'TX-9012', amount: 120000, method: 'Payme', date: new Date(), status: 'completed' }
        ]
    };

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([MOCK_USER]);

    const addBalance = (amount, method) => {
        const newTransaction = {
            id: `TX-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
            amount,
            method,
            date: new Date(),
            status: 'completed'
        };

        const newNotification = {
            id: Date.now().toString(),
            title: 'cabinet:notifications.paymentSuccess.title',
            message: 'cabinet:notifications.paymentSuccess.received',
            type: 'success',
            date: new Date(),
            read: false,
            amount
        };

        const updatedUser = {
            ...user,
            balance: user.balance + amount,
            transactions: [newTransaction, ...user.transactions],
            notifications: [newNotification, ...user.notifications]
        };

        setUser(updatedUser);
        setUsers(prev => prev.map(u => u.phone === user.phone ? updatedUser : u));
    };

    const updateTariff = (tariffName) => {
        setUser(prev => ({ ...prev, tariff: tariffName }));
    };

    const markNotificationRead = (id) => {
        setUser(prev => ({
            ...prev,
            notifications: prev.notifications.map(n => n.id === id ? { ...n, read: true } : n)
        }));
    };

    const addPoints = (amount) => {
        setUser(prev => ({ ...prev, points: prev.points + amount }));
    };

    const logout = () => {
        setUser(null);
    };

    const login = (phone, password) => {
        const foundUser = users.find(u => u.phone === phone && u.password === password);
        if (foundUser) {
            setUser(foundUser);
            return { success: true };
        }
        return { success: false, error: t('errors.auth.invalid') };
    };

    const register = (name, phone, password) => {
        if (users.find(u => u.phone === phone)) {
            return { success: false, error: t('errors.auth.exists') };
        }

        const cleanPhone = phone.replace(/\s/g, '');
        if (cleanPhone.length < 9) {
            return { success: false, error: t('errors.auth.invalidPhone') };
        }

        const newUser = {
            ...MOCK_USER,
            name: name,
            phone: phone,
            password: password,
            id: Math.floor(Math.random() * 10000000).toString(),
            balance: 0,
            points: 0,
            notifications: [],
            transactions: []
        };

        setUsers(prev => [...prev, newUser]);
        setUser(newUser);
        return { success: true };
    };

    const updateProfile = (profileData) => {
        const updatedUser = { ...user, ...profileData };
        setUser(updatedUser);
        setUsers(prev => prev.map(u => u.phone === user.phone ? updatedUser : u));
        return { success: true };
    };

    const changePassword = (currentPassword, newPassword) => {
        if (user.password !== currentPassword) {
            return { success: false, error: t('errors.auth.wrongPassword') };
        }
        const updatedUser = { ...user, password: newPassword };
        setUser(updatedUser);
        setUsers(prev => prev.map(u => u.phone === user.phone ? updatedUser : u));
        return { success: true };
    };

    return (
        <UserContext.Provider value={{
            user,
            addBalance,
            updateTariff,
            markNotificationRead,
            addPoints,
            logout,
            login,
            register,
            updateProfile,
            changePassword
        }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error('useUser must be used within UserProvider');
    return context;
};
