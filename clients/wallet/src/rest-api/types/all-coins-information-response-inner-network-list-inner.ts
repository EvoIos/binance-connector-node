/* tslint:disable */
/* eslint-disable */

/**
 * Binance Wallet REST API
 *
 * OpenAPI Specification for the Binance Wallet REST API
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
import type { AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner } from './all-coins-information-response-inner-network-list-inner-network-list-inner';

/**
 *
 * @export
 * @interface AllCoinsInformationResponseInnerNetworkListInner
 */
export interface AllCoinsInformationResponseInnerNetworkListInner {
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    addressRegex?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    coin?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    depositDesc?: string;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    depositEnable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    isDefault?: boolean;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    memoRegex?: string;
    /**
     *
     * @type {number}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    minConfirm?: number;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    network?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    specialTips?: string;
    /**
     *
     * @type {number}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    unLockConfirm?: number;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    withdrawDesc?: string;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    withdrawEnable?: boolean;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    withdrawFee?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    withdrawIntegerMultiple?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    withdrawMax?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    withdrawMin?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    withdrawInternalMin?: string;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    sameAddress?: boolean;
    /**
     *
     * @type {number}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    estimatedArrivalTime?: number;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    busy?: boolean;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    contractAddressUrl?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    contractAddress?: string;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    depositAllEnable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    withdrawAllEnable?: boolean;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    free?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    locked?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    freeze?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    withdrawing?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    ipoing?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    ipoable?: string;
    /**
     *
     * @type {string}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    storage?: string;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    isLegalMoney?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    trading?: boolean;
    /**
     *
     * @type {Array<AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner>}
     * @memberof AllCoinsInformationResponseInnerNetworkListInner
     */
    networkList?: Array<AllCoinsInformationResponseInnerNetworkListInnerNetworkListInner>;
}
