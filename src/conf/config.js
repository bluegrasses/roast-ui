var api_url='';
var gaode_maps_js_api_key='2d486ebaae2aa7c2460fad1348c268a1';
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
    GAODE_MAPS_JS_API_KEY: gaode_maps_js_api_key
}