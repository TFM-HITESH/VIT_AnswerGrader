export const PLANS = [
    {
        name: 'Free',
        slug: 'free',
        quota: 10,
        pagesPerPdf: 50,
        price: {
            amount: 0,
            priceIds: {
                test: '',
                production: '',
            },
        },
    },
    {
        name: 'Pro',
        slug: 'pro',
        quota: 10,
        pagesPerPdf: 100,
        price: {
            amount: 149,
            priceIds: {
                test: 'price_1OrpqpSDyB4sLyQvOnYrcwE9',
                production: '',
            },
        },
    },
    {
        name: 'Pro++',
        slug: 'pro++',
        quota: 30,
        pagesPerPdf: 500,
        price: {
            amount: 349,
            priceIds: {
                test: 'price_1OrpqpSDyB4sLyQvOnYrcwE9',
                production: '',
            },
        },
    },
]
