/* tslint:disable */

/**
 * Binance Spot REST API
 *
 * OpenAPI Specifications for the Binance Spot REST API
 *
 * API documents:
 * - [Github rest-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/rest-api.md)
 * - [General API information for rest-api on website](https://developers.binance.com/docs/binance-spot-api-docs/rest-api/general-api-information)
 *
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
 * @interface OrderOcoResponseOrderReportsInner
 */
export interface OrderOcoResponseOrderReportsInner {
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    symbol?: string;
    /**
     *
     * @type {number}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    orderId?: number;
    /**
     *
     * @type {number}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    clientOrderId?: string;
    /**
     *
     * @type {number}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    transactTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    price?: string;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    origQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    executedQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    origQuoteOrderQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    cummulativeQuoteQty?: string;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    status?: string;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    timeInForce?: string;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    type?: string;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    side?: string;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    stopPrice?: string;
    /**
     *
     * @type {number}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    workingTime?: number;
    /**
     *
     * @type {string}
     * @memberof OrderOcoResponseOrderReportsInner
     */
    selfTradePreventionMode?: string;
}
