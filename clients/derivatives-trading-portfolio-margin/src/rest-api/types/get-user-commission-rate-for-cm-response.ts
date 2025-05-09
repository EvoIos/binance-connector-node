/* tslint:disable */

/**
 * Binance Derivatives Trading Portfolio Margin REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Portfolio Margin REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface GetUserCommissionRateForCmResponse
 */
export interface GetUserCommissionRateForCmResponse {
    /**
     *
     * @type {string}
     * @memberof GetUserCommissionRateForCmResponse
     */
    symbol?: string;
    /**
     *
     * @type {string}
     * @memberof GetUserCommissionRateForCmResponse
     */
    makerCommissionRate?: string;
    /**
     *
     * @type {string}
     * @memberof GetUserCommissionRateForCmResponse
     */
    takerCommissionRate?: string;
}
