/* tslint:disable */
/* eslint-disable */

/**
 * Binance Spot WebSocket API
 *
 * OpenAPI Specifications for the Binance Spot WebSocket API
 *
 * API documents:
 * - [Github web-socket-api documentation file](https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-api.md)
 * - [General API information for web-socket-api on website](https://developers.binance.com/docs/binance-spot-api-docs/web-socket-api/general-api-information)
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
import type { OrderAmendKeepPriorityResponseResultAmendedOrder } from './order-amend-keep-priority-response-result-amended-order';
// May contain unused imports in some cases
// @ts-ignore
import type { OrderAmendKeepPriorityResponseResultListStatus } from './order-amend-keep-priority-response-result-list-status';

/**
 *
 * @export
 * @interface OrderAmendKeepPriorityResponseResult
 */
export interface OrderAmendKeepPriorityResponseResult {
    /**
     *
     * @type {number}
     * @memberof OrderAmendKeepPriorityResponseResult
     */
    transactTime?: number;
    /**
     *
     * @type {number}
     * @memberof OrderAmendKeepPriorityResponseResult
     */
    executionId?: number;
    /**
     *
     * @type {OrderAmendKeepPriorityResponseResultAmendedOrder}
     * @memberof OrderAmendKeepPriorityResponseResult
     */
    amendedOrder?: OrderAmendKeepPriorityResponseResultAmendedOrder;
    /**
     *
     * @type {OrderAmendKeepPriorityResponseResultListStatus}
     * @memberof OrderAmendKeepPriorityResponseResult
     */
    listStatus?: OrderAmendKeepPriorityResponseResultListStatus;
}
