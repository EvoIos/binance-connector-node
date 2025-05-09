import {
    DerivativesTradingPortfolioMargin,
    DerivativesTradingPortfolioMarginRestAPI,
    DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
} from '../../../src';

const configurationRestAPI = {
    apiKey: process.env.API_KEY ?? '',
    apiSecret: process.env.API_SECRET ?? '',
    basePath: process.env.BASE_PATH ?? DERIVATIVES_TRADING_PORTFOLIO_MARGIN_REST_API_PROD_URL,
};
const client = new DerivativesTradingPortfolioMargin({ configurationRestAPI });

async function newUmOrder() {
    try {
        const response = await client.restAPI.newUmOrder({
            symbol: 'symbol_example',
            side: DerivativesTradingPortfolioMarginRestAPI.NewUmOrderSideEnum.BUY,
            type: DerivativesTradingPortfolioMarginRestAPI.NewUmOrderTypeEnum.LIMIT,
        });

        const rateLimits = response.rateLimits!;
        console.log('newUmOrder() rate limits:', rateLimits);

        const data = await response.data();
        console.log('newUmOrder() response:', data);
    } catch (error) {
        console.error('newUmOrder() error:', error);
    }
}

newUmOrder();
