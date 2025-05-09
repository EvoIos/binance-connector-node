/* tslint:disable */
/* eslint-disable */

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

// May contain unused imports in some cases
// @ts-ignore
import type { OrderAmendKeepPriorityResponseListStatusOrdersInner } from './order-amend-keep-priority-response-list-status-orders-inner';

/**
 *
 * @export
 * @interface OrderAmendKeepPriorityResponseListStatus
 */
export interface OrderAmendKeepPriorityResponseListStatus {
    /**
     *
     * @type {number}
     * @memberof OrderAmendKeepPriorityResponseListStatus
     */
    orderListId?: number;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseListStatus
     */
    contingencyType?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseListStatus
     */
    listOrderStatus?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseListStatus
     */
    listClientOrderId?: string;
    /**
     *
     * @type {string}
     * @memberof OrderAmendKeepPriorityResponseListStatus
     */
    symbol?: string;
    /**
     *
     * @type {Array<OrderAmendKeepPriorityResponseListStatusOrdersInner>}
     * @memberof OrderAmendKeepPriorityResponseListStatus
     */
    orders?: Array<OrderAmendKeepPriorityResponseListStatusOrdersInner>;
}
