export const pricingTiers = [
    {
        name: 'Starter',
        description: 'For solo founders and small tests',
        priceMonthly: '19',
        priceYearly: '190',
        features: ['1 project', 'Basic analytics', 'Email support'],
    },
    {
        name: 'Pro',
        description: 'For growing teams',
        priceMonthly: '49',
        priceYearly: '490',
        features: ['1 project', 'Advanced analytics', 'Priority email support'],
        popular: true,
    },
    {
        name: 'Enterprise',
        description: 'Custom plan for large teams',
        priceMonthly: '129',
        priceYearly: '1290',
        features: ['Unlimited projects', 'SAML SSO', 'Dedicated support'],
    },
]