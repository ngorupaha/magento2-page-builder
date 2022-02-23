/*eslint-disable */
/* jscs:disable */
define(["Magento_PageBuilder/js/utils/object"], function (_object) {
  /**
   * Copyright © Magento, Inc. All rights reserved.
   * See COPYING.txt for license details.
   */
  var ImageOverlayColor = /*#__PURE__*/function () {
    "use strict";

    function ImageOverlayColor() {}

    var _proto = ImageOverlayColor.prototype;

    /**
     * Convert value to internal format
     *
     * @param value string
     * @returns {string | object}
     */
    _proto.fromDom = function fromDom(value) {
      return value;
    }
    /**
     * Convert value to knockout format
     *
     * @param name string
     * @param data Object
     * @returns {string | object}
     */
    ;

    _proto.toDom = function toDom(name, data) {
      var value = (0, _object.get)(data, name);

      if (value !== "" && value !== undefined) {
        return value;
      }

      return "transparent";
    };

    return ImageOverlayColor;
  }();

  return ImageOverlayColor;
});
//# sourceMappingURL=video-overlay-color.js.map