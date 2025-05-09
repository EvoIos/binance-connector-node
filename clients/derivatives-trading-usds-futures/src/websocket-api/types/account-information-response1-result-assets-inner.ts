/* tslint:disable */

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

/**
 *
 * @export
 * @interface AccountInformationResponse1ResultAssetsInner
 */
export interface AccountInformationResponse1ResultAssetsInner {
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    asset?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    walletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    unrealizedProfit?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    marginBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    maintMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    initialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    positionInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    openOrderInitialMargin?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    crossWalletBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    crossUnPnl?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    availableBalance?: string;
    /**
     *
     * @type {string}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    maxWithdrawAmount?: string;
    /**
     *
     * @type {boolean}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    marginAvailable?: boolean;
    /**
     *
     * @type {number}
     * @memberof AccountInformationResponse1ResultAssetsInner
     */
    updateTime?: number;
}
