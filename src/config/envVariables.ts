import Config from 'react-native-config';

const ENV = Config.ENV;

export const isProduction = ENV === 'production';

export const API_URL = isProduction ? Config.STAGING_API_URL : Config.PROD_API_URL;
