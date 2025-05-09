/* tslint:disable */

/**
 * Binance Derivatives Trading Options REST API
 *
 * OpenAPI Specification for the Binance Derivatives Trading Options REST API
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
 * @interface ExchangeInformationResponseRateLimitsInner
 */
export interface ExchangeInformationResponseRateLimitsInner {
    /**
     *
     * @type {string}
     * @memberof ExchangeInformationResponseRateLimitsInner
     */
    rateLimitType?: string;
    /**
     *
     * @type {string}
     * @memberof ExchangeInformationResponseRateLimitsInner
     */
    interval?: string;
    /**
     *
     * @type {number}
     * @memberof ExchangeInformationResponseRateLimitsInner
     */
    intervalNum?: number;
    /**
     *
     * @type {number}
     * @memberof ExchangeInformationResponseRateLimitsInner
     */
    limit?: number;
}
