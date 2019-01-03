/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {DataObject} from "../../data-store";
import ConverterInterface from "../converter-interface";
import {DataObjectPaddings} from "../../property/paddings";
import {DataObjectMargins} from "../../property/margins";

/**
 * @api
 */
export default class Paddings implements ConverterInterface {
    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    public fromDom(value: DataObjectPaddings): DataObjectPaddings {
        if (undefined !== value.padding) {
            return {
                padding: {
                    top: value.padding.top.replace("px", ""),
                    left: value.padding.left.replace("px", ""),
                    right: value.padding.right.replace("px", ""),
                    bottom: value.padding.bottom.replace("px", ""),
                }
            };
        }
        return {};
    }

    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */
    public toDom(name: string, data: DataObject): string | object {
        const result: {
            [key: string]: string;
        } = {};
        let value: DataObjectPaddings;
        if (data[name] && typeof data[name] === "string") {
            value = JSON.parse(data[name]);
        } else {
            value = data[name];
        }
        if (value && undefined !== value.padding) {
            result.paddingLeft = value.padding.left ? value.padding.left + "px" : "";
            result.paddingTop = value.padding.top ? value.padding.top + "px" : "";
            result.paddingRight = value.padding.right ? value.padding.right + "px" : "";
            result.paddingBottom = value.padding.bottom ? value.padding.bottom + "px" : "";
        }
        return result;
    }
}
