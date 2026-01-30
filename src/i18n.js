import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uzCommon from './locales/uz/common.json';
import enCommon from './locales/en/common.json';
import ruCommon from './locales/ru/common.json';

import uzHome from './locales/uz/home.json';
import enHome from './locales/en/home.json';
import ruHome from './locales/ru/home.json';

import uzMobile from './locales/uz/mobile.json';
import enMobile from './locales/en/mobile.json';
import ruMobile from './locales/ru/mobile.json';

import uzInternet from './locales/uz/internet.json';
import enInternet from './locales/en/internet.json';
import ruInternet from './locales/ru/internet.json';

import uzTv from './locales/uz/tv.json';
import enTv from './locales/en/tv.json';
import ruTv from './locales/ru/tv.json';

import uzBusiness from './locales/uz/business.json';
import enBusiness from './locales/en/business.json';
import ruBusiness from './locales/ru/business.json';

import uzAbout from './locales/uz/about.json';
import enAbout from './locales/en/about.json';
import ruAbout from './locales/ru/about.json';

import uzBlog from './locales/uz/blog.json';
import enBlog from './locales/en/blog.json';
import ruBlog from './locales/ru/blog.json';

import uzCareers from './locales/uz/careers.json';
import enCareers from './locales/en/careers.json';
import ruCareers from './locales/ru/careers.json';

import uzCoverage from './locales/uz/coverage.json';
import enCoverage from './locales/en/coverage.json';
import ruCoverage from './locales/ru/coverage.json';

import uzUssd from './locales/uz/ussd.json';
import enUssd from './locales/en/ussd.json';
import ruUssd from './locales/ru/ussd.json';

import uzSpeedtest from './locales/uz/speedtest.json';
import enSpeedtest from './locales/en/speedtest.json';
import ruSpeedtest from './locales/ru/speedtest.json';

import uzCabinet from './locales/uz/cabinet.json';
import enCabinet from './locales/en/cabinet.json';
import ruCabinet from './locales/ru/cabinet.json';

import uzPayment from './locales/uz/payment.json';
import enPayment from './locales/en/payment.json';
import ruPayment from './locales/ru/payment.json';
import uzAdmin from './locales/uz/admin.json';
import enAdmin from './locales/en/admin.json';
import ruAdmin from './locales/ru/admin.json';
import uzForms from './locales/uz/forms.json';
import enForms from './locales/en/forms.json';
import ruForms from './locales/ru/forms.json';
import uzAuth from './locales/uz/auth.json';
import enAuth from './locales/en/auth.json';
import ruAuth from './locales/ru/auth.json';

const resources = {
    uz: {
        common: uzCommon,
        home: uzHome,
        mobile: uzMobile,
        internet: uzInternet,
        tv: uzTv,
        business: uzBusiness,
        about: uzAbout,
        blog: uzBlog,
        careers: uzCareers,
        coverage: uzCoverage,
        ussd: uzUssd,
        speedtest: uzSpeedtest,
        cabinet: uzCabinet,
        payment: uzPayment,
        admin: uzAdmin,
        forms: uzForms,
        auth: uzAuth
    },
    en: {
        common: enCommon,
        home: enHome,
        mobile: enMobile,
        internet: enInternet,
        tv: enTv,
        business: enBusiness,
        about: enAbout,
        blog: enBlog,
        careers: enCareers,
        coverage: enCoverage,
        ussd: enUssd,
        speedtest: enSpeedtest,
        cabinet: enCabinet,
        payment: enPayment,
        admin: enAdmin,
        forms: enForms,
        auth: enAuth
    },
    ru: {
        common: ruCommon,
        home: ruHome,
        mobile: ruMobile,
        internet: ruInternet,
        tv: ruTv,
        business: ruBusiness,
        about: ruAbout,
        blog: ruBlog,
        careers: ruCareers,
        coverage: ruCoverage,
        ussd: ruUssd,
        speedtest: ruSpeedtest,
        cabinet: ruCabinet,
        payment: ruPayment,
        admin: ruAdmin,
        forms: ruForms,
        auth: ruAuth
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || 'uz',
        fallbackLng: 'uz',
        defaultNS: 'common',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
