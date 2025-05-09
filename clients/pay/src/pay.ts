import { platform, arch } from 'os';
import { ConfigurationRestAPI, PAY_REST_API_PROD_URL } from '@binance/common';
import { name, version } from '../package.json';
import { RestAPI } from './rest-api';

export interface ConfigurationPay {
    configurationRestAPI?: ConfigurationRestAPI;
}

export class Pay {
    public restAPI!: RestAPI;

    constructor(config: ConfigurationPay) {
        if (config?.configurationRestAPI) {
            const configRestAPI = new ConfigurationRestAPI(config.configurationRestAPI);
            configRestAPI.basePath = configRestAPI.basePath || PAY_REST_API_PROD_URL;
            configRestAPI.baseOptions = configRestAPI.baseOptions || {};
            configRestAPI.baseOptions.headers = {
                ...(configRestAPI.baseOptions.headers || {}),
                'User-Agent': `${name}/${version} (Node.js/${process.version}; ${platform()}; ${arch()})`,
            };
            this.restAPI = new RestAPI(configRestAPI);
        }
    }
}
