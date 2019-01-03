/*eslint-disable */
define([], function () {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */
  var Margins =
  /*#__PURE__*/
  function () {
    "use strict";

    function Margins() {}

    var _proto = Margins.prototype;

    /**
     * @param {string} value
     * @returns {Object | string}
     */
    _proto.fromDom = function fromDom(value) {
      return value;
    };
    /**
     * Convert value to knockout format
     *
     * @param {string} name
     * @param {DataObject} data
     * @returns {string | object}
     */


    _proto.toDom = function toDom(name, data) {
      var result = {};
      var value;

      if (data[name] && typeof data[name] === "string") {
        value = JSON.parse(data[name]);
      } else {
        value = data[name];
      }

      if (value && undefined !== value.margin) {
        result.marginLeft = value.margin.left ? value.margin.left + "px" : "";
        result.marginTop = value.margin.top ? value.margin.top + "px" : "";
        result.marginRight = value.margin.right ? value.margin.right + "px" : "";
        result.marginBottom = (parseInt(value.margin.bottom, 10) > 0 ? value.margin.bottom : 1) + "px";
      }

      return result;
    };

    return Margins;
  }();

  return Margins;
});
//# sourceMappingURL=margins.js.map
