export const COLORS = {
  primary: '#0057FF',
  secondary: '#0A1A3C',
  accent: '#00E0FF',
  neutral: '#F5F7FA',
  danger: '#FF305A',
  success: '#22CC88',
};

export const INTERNET_PLANS = [
  {
    id: 'plan-1',
    name: 'internet:plans.milliyFiber50.name',
    price: 120000,
    speed: '50 Mbps',
    category: 'internet:plans.milliyFiber50.category',
    features: [
      'internet:plans.milliyFiber50.features.0',
      'internet:plans.milliyFiber50.features.1',
      'internet:plans.milliyFiber50.features.2'
    ],
  },
  {
    id: 'plan-2',
    name: 'internet:plans.gigaPro500.name',
    price: 250000,
    speed: '500 Mbps',
    category: 'internet:plans.gigaPro500.category',
    isPopular: true,
    features: [
      'internet:plans.gigaPro500.features.0',
      'internet:plans.gigaPro500.features.1',
      'internet:plans.gigaPro500.features.2',
      'internet:plans.gigaPro500.features.3'
    ],
  },
  {
    id: 'plan-3',
    name: 'internet:plans.businessElite.name',
    price: 950000,
    speed: '1 Gbps',
    category: 'internet:plans.businessElite.category',
    features: [
      'internet:plans.businessElite.features.0',
      'internet:plans.businessElite.features.1',
      'internet:plans.businessElite.features.2',
      'internet:plans.businessElite.features.3'
    ],
  },
];

export const MOBILE_PLANS = [
  {
    id: 'm-1',
    name: 'mobile:plans.yengil40.name',
    price: 40000,
    data: '15 GB',
    calls: 'Cheksiz',
    category: 'mobile:plans.yengil40.category',
    features: [
      'mobile:plans.yengil40.features.0',
      'mobile:plans.yengil40.features.1'
    ],
  },
  {
    id: 'm-2',
    name: 'mobile:plans.statusPlatinum.name',
    price: 150000,
    data: 'Cheksiz 5G',
    calls: 'Cheksiz',
    category: 'mobile:plans.statusPlatinum.category',
    isPopular: true,
    features: [
      'mobile:plans.statusPlatinum.features.0',
      'mobile:plans.statusPlatinum.features.1',
      'mobile:plans.statusPlatinum.features.2'
    ],
  },
];

export const USSD_CODES = [
  { code: '*100#', description: 'ussd:codes.checkBalance', category: 'ussd:categories.main' },
  { code: '*102#', description: 'ussd:codes.checkInternet', category: 'ussd:categories.internet' },
  { code: '*103#', description: 'ussd:codes.checkBundles', category: 'ussd:categories.main' },
  { code: '*110#', description: 'ussd:codes.myNumber', category: 'ussd:categories.main' },
  { code: '*511#', description: 'ussd:codes.enable4G', category: 'ussd:categories.internet' },
  { code: '*222#', description: 'ussd:codes.serviceMenu', category: 'ussd:categories.services' },
];

export const USAGE_MOCK = [
  { day: 'common:days.mon', data: 4.5 },
  { day: 'common:days.tue', data: 3.2 },
  { day: 'common:days.wed', data: 8.1 },
  { day: 'common:days.thu', data: 5.4 },
  { day: 'common:days.fri', data: 12.0 },
  { day: 'common:days.sat', data: 15.6 },
  { day: 'common:days.sun', data: 9.8 },
];
