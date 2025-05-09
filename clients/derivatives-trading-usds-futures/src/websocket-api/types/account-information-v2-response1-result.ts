/* tslint:disable */
/* eslint-disable */

/**
 * Binance Derivatives Trading USDS Futures WebSocket API
 *
 * OpenAPI Specification for the Binance Derivatives Trading USDS Futures WebSocket API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import type { AccountInformationV2Response1ResultAssetsInner } from './account-information-v2-response1-result-assets-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { AccountInformationV2Response1ResultPositionsInner } from './account-information-v2-response1-result-positions-inner';

/**
 *
 * @export
 * @interface AccountInformationV2Response1Result
 */
export interface AccountInformationV2Response1Result {
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    totalInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    totalMaintMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    totalWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    totalUnrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    totalMarginBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    totalPositionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    totalOpenOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    totalCrossWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    totalCrossUnPnl?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    availableBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationV2Response1Result
     */
    maxWithdrawAmount?: string;
    /**
     *
     * @type {Array<AccountInformationV2Response1ResultAssetsInner>}
     * @memberof AccountInformationV2Response1Result
     */
    assets?: Array<AccountInformationV2Response1ResultAssetsInner>;
    /**
     *
     * @type {Array<AccountInformationV2Response1ResultPositionsInner>}
     * @memberof AccountInformationV2Response1Result
     */
    positions?: Array<AccountInformationV2Response1ResultPositionsInner>;
}
