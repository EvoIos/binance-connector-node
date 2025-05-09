/* tslint:disable */

/**
 * Binance Fiat REST API
 *
 * OpenAPI Specification for the Binance Fiat REST API
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
 * @interface GetFiatDepositWithdrawHistoryResponseDataInner
 */
export interface GetFiatDepositWithdrawHistoryResponseDataInner {
    /**
     *
     * @type {string}
     * @memberof GetFiatDepositWithdrawHistoryResponseDataInner
     */
    orderNo?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatDepositWithdrawHistoryResponseDataInner
     */
    fiatCurrency?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatDepositWithdrawHistoryResponseDataInner
     */
    indicatedAmount?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatDepositWithdrawHistoryResponseDataInner
     */
    amount?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatDepositWithdrawHistoryResponseDataInner
     */
    totalFee?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatDepositWithdrawHistoryResponseDataInner
     */
    method?: string;
    /**
     *
     * @type {string}
     * @memberof GetFiatDepositWithdrawHistoryResponseDataInner
     */
    status?: string;
    /**
     *
     * @type {number}
     * @memberof GetFiatDepositWithdrawHistoryResponseDataInner
     */
    createTime?: number;
    /**
     *
     * @type {number}
     * @memberof GetFiatDepositWithdrawHistoryResponseDataInner
     */
    updateTime?: number;
}
