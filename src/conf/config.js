var api_url='';
switch (process.env.NODE_ENV) {
    case 'development':
        api_url = 'http://roast.test/api';
        break;
    case 'production':
        api_url = 'http://localhost:3000';
        break;
}

export const ROAST_CONFIG = {
    API_URL: api_url,
}